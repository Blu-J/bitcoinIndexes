import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";
import schema from "./schema";

const server = new GraphQLServer({
  typeDefs: schema,
  resolvers: resolvers as any
});
server.start(
  {
    endpoint: "/graphql"
  },
  () => console.log("🚀 Server is running on localhost:4000")
);

export default server;
