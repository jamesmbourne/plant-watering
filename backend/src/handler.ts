import { ApolloServer } from "apollo-server-lambda";
import { createLogger, stdSerializers } from "bunyan";
import { resolvers } from "./resolvers";
const schema = require("./schema.graphql");

const log = createLogger({
  name: "plant-watering-backend",
  serializers: { err: stdSerializers.err }
});

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers as any,
  formatError: err => {
    log.error({ err });
    return err;
  },
  formatResponse: (response: any) => {
    log.info(response);
    return response;
  },
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  }),
  playground: true,
  tracing: true
});

export const graphqlHandler = server.createHandler({
  cors: {
    origin: "*"
  }
});
