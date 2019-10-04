import React, { Fragment } from "react";
import {
  useGetMyPlantsQuery,
  useGetPlantQuery,
  Schedule
} from "./generated/graphql";
import { Switch, Route, RouteChildrenProps } from "react-router";
import { Link } from "react-router-dom";

const Plants: React.FC = () => (
  <Switch>
    <Route exact path="/" component={PlantsList} />
    <Route exact path="/plants/:id" component={PlantById} />
  </Switch>
);

const PlantsList: React.FC = () => {
  const { loading, error, data } = useGetMyPlantsQuery();

  if (loading) {
    return <>Loading...</>;
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
    return <>Loading...</>;
  }

  if (error || !data || !data.plant) {
    return <>Error</>;
  }

  const {
    plant: { name, species, schedule }
  } = data;

  return (
    <>
      <h1>{name}</h1>
      <h3>{species}</h3>
      {schedule && <DisplaySchedule {...schedule} />}
      <Link to="/">← back to all plants</Link>
    </>
  );
};

const DisplaySchedule: React.FC<Schedule> = ({ date }) => <p>{date}</p>;

export default Plants;
