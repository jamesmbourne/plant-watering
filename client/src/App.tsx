import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Plants from "./Plants";

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

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Wrapper>
          <Title>
            Plant Watering{" "}
            <span role="img" aria-label="plant being watered">
              💦🌱
            </span>
          </Title>
        </Wrapper>
        <BodyWrapper>
          <Plants />
        </BodyWrapper>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
