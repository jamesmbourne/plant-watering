import { Resolvers } from "./generated/graphql";

// import DynamoDB from "aws-sdk/clients/dynamodb";
// import AWSXRay from "aws-xray-sdk";
// const DynamoDBXRay = AWSXRay.captureAWSClient(DynamoDB);

// const docClient = new DynamoDBXRay.DocumentClient();

export const resolvers: Resolvers = {
  Query: {
    getPlants: async (_root, _args) => {
      return [{ id: "foobar", name: "steve" }];
    }
  }
};
