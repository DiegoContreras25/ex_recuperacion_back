import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { typeDefs } from "./gql/schema.ts";
import montoose from "mongoose";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  },
});

const { url } = await startStandaloneServer(server, { listen: 8000 });
console.info(`🚀 Server ready at ${url}`);
