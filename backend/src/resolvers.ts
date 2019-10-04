import uuid from "uuid/v4";
import { Resolvers } from "./generated/graphql";
import { log } from "./handler";

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
    plants: async (_root, _args) => {
      return plants;
    },
    plant: async (_root, _args) => {
      return plants[0];
    }
  },
  Plant: {
    schedule: async plant => {
      log.info({ plant });

      if (plant.name === "steve") {
        return { id: "12345", date: new Date().toISOString() };
      }

      return null;
    }
  }
};
