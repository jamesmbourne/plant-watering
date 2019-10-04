import { Resolvers } from "./generated/graphql";
import uuid from "uuid/v4";

// import DynamoDB from "aws-sdk/clients/dynamodb";
// import AWSXRay from "aws-xray-sdk";
// const DynamoDBXRay = AWSXRay.captureAWSClient(DynamoDB);

// const docClient = new DynamoDBXRay.DocumentClient();

const plants = [
  { id: uuid(), name: "steve", species: "monstera deliciosa" },
  { id: uuid(), name: "bob", species: "cactus" },
  { id: uuid(), name: "henry", species: "hawthorn" },
  { id: uuid(), name: "andy", species: "amaryllis" },
  { id: uuid(), name: "oliver", species: "orchid" }
];

export const resolvers: Resolvers = {
  Query: {
    getPlants: async (_root, _args) => {
      return plants;
    },
    getPlant: async (_root, _args) => {
      return plants[0];
    }
  }
};
