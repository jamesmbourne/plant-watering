import React, { Fragment } from "react";
import styled from "styled-components";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { useGetMyPlantsQuery } from "./generated/graphql";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: green;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const BodyWrapper = styled.section`
  padding: 4em;
`;

const PLANTS = gql`
  {
    getPlants {
      id
      name
    }
  }
`;

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Wrapper>
        <Title>Plant Watering 💦🌱</Title>
      </Wrapper>
      <BodyWrapper>
        <Plants />
      </BodyWrapper>
    </ApolloProvider>
  );
};

const Plants: React.FC = () => {
  const { loading, error, data } = useGetMyPlantsQuery();

  if (loading) {
    return <>Loading...</>;
  }

  if (error || !data) {
    return <>Error</>;
  }

  return (
    <>
      {data.getPlants.map(({ id, name, species }) => (
        <Fragment key={id}>
          <h1>
            <a href={`/plants/${id}`}>{name}</a>
          </h1>
          <h5>{species}</h5>
        </Fragment>
      ))}
    </>
  );
};

export default App;
