import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";
import schema from "./schema";
import express = require("express");
import compression from "compression";

const server = new GraphQLServer({
  typeDefs: schema,
  resolvers: resolvers as any
} as any);

server.express.use(compression());
server.express.use(express.static("out"));
const port = process.env.PORT || 9000;
server.start(
  {
    endpoint: "/graphql",
    port,
  },
  () => console.log(`🚀 Server is running on localhost:${port}`)
);

export default server;
