import Maybe from "graphql/tsutils/Maybe";
import { DateTime } from "luxon";
import React, { Fragment, Suspense, useState } from "react";
import { Route, RouteChildrenProps, Switch } from "react-router";
import { Link } from "react-router-dom";
import {
  GetMyPlantsDocument,
  Schedule,
  useCreatePlantMutation,
  useDeletePlantMutation,
  useGetMyPlantsQuery,
  useGetPlantQuery
} from "./generated/graphql";

const Plants: React.FC = () => (
  <Switch>
    <Route exact path="/" component={PlantsList} />
    <Route exact path="/plants/:id" component={PlantById} />
  </Switch>
);

const PlantsList: React.FC = () => {
  const { loading, error, data } = useGetMyPlantsQuery();

  if (loading) {
    return null;
  }

  if (error || !data) {
    return <>Error</>;
  }

  return (
    <>
      <CreatePlant />
      {data.plants.map(({ id, name, species }) => (
        <Fragment key={id}>
          <h1>
            <Link to={`/plants/${id}`}>{name}</Link>
          </h1>
          <h5>{species}</h5>
        </Fragment>
      ))}
    </>
  );
};

type PlantByIdProps = RouteChildrenProps<{ id: string }>;

const PlantById: React.FC<PlantByIdProps> = ({ match, history }) => {
  const id = (match && match.params.id) || "";

  const [deletePlant] = useDeletePlantMutation({
    refetchQueries: [{ query: GetMyPlantsDocument }],
    awaitRefetchQueries: true
  });

  const { loading, error, data } = useGetPlantQuery({ variables: { id } });

  if (loading) {
    return null;
  }

  if (error || !data || !data.plant) {
    return <>Error</>;
  }

  const {
    plant: { name, species, schedule }
  } = data;

  return (
    <Suspense fallback={<>Loading...</>}>
      <h1>{name}</h1>
      <h3>{species}</h3>
      <DisplaySchedule schedule={schedule} />
      <Link to="/">← back to all plants</Link>
      <button
        onClick={async () => {
          await deletePlant({ variables: { id } });
          console.log("Done");
          history.push("/");
        }}
      >
        Delete
      </button>
    </Suspense>
  );
};

interface DisplayScheduleProps {
  schedule: Maybe<Schedule>;
}

const DisplaySchedule: React.FC<DisplayScheduleProps> = ({ schedule }) => (
  <p>
    {schedule
      ? `next due for watering ${DateTime.fromISO(schedule.date)
          .plus({ days: 3 })
          .toRelative()}`
      : ""}
  </p>
);

const CreatePlant: React.FC = () => {
  const [createPlant, { data }] = useCreatePlantMutation({
    refetchQueries: [{ query: GetMyPlantsDocument }]
  });
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        e.stopPropagation();
        await createPlant({ variables: { species, name } });
        setName("");
        setSpecies("");
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="species">Species</label>
      <input
        type="text"
        id="species"
        onChange={e => {
          setSpecies(e.target.value);
        }}
      />
      <button type="submit">Create</button>
      <p>{(data && data.CreatePlant.id) || "Not yet created"}</p>
    </form>
  );
};

export default Plants;
