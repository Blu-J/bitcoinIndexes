import * as serviceOrders from "./services/orders";
const resolvers = {
  Query: {
    orders: serviceOrders.orders
  }
};

export default resolvers;
