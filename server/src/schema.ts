import gql from "graphql-tag";

export default gql`
  type Order {
    price: Float!
    amount: Float!
    type: String!
    serverName: String!
  }
  type Book {
    asks: [Order!]!
    bids: [Order!]!
  }

  type Query {
    orders(exchanges: [String]!, market: String!): [Order!]!
  }
`;
