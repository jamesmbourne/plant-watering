import React from "react";
import styled from "styled-components";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://9vkow8dtoe.execute-api.eu-west-2.amazonaws.com/dev/graphql"
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
        <Title>Plant Watering!</Title>
      </Wrapper>
      <BodyWrapper>
        <Plants />
      </BodyWrapper>
    </ApolloProvider>
  );
};

const Plants: React.FC = () => {
  const { loading, error, data } = useQuery(PLANTS);

  if (!data) {
    return <>Loading...</>;
  }

  return data.getPlants.map((p: any) => (
    <>
      <h1>{p.name}</h1>
      <p>{p.id}</p>
    </>
  ));
};

export default App;
