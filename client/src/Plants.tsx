import React, { Fragment, Suspense } from "react";
import { DateTime } from "luxon";
import {
  useGetMyPlantsQuery,
  useGetPlantQuery,
  Schedule
} from "./generated/graphql";
import { Switch, Route, RouteChildrenProps } from "react-router";
import { Link } from "react-router-dom";
import Maybe from "graphql/tsutils/Maybe";

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

const PlantById: React.FC<PlantByIdProps> = ({ match }) => {
  const id = (match && match.params.id) || "";

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

export default Plants;
