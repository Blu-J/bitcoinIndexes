import { Order } from "../lib/Order";
import Grid from "@material-ui/core/Grid";
import dynamic from "next/dynamic";
import { PlotParams } from "react-plotly.js";

const Plot = dynamic<PlotParams>(import("../Components/plotly") as any, {
  ssr: false
});

type GroupPair = [string, Order[]];
const OrderChart = (props: { orders: Order[]; name: string }) => (
  <Grid item xs={6}>
    <Plot
      data={props.orders
        .reduce((acc: GroupPair[], order) => {
          const index = acc.map(([a]) => a).indexOf(order.serverName);
          if (index < 0) {
            return [...acc, [order.serverName, [order]]] as any;
          }
          acc[index][1].push(order);
          return acc;
        }, [])
        .map(([key, orders]: GroupPair) => ({
          x: orders.map(x => x.price),
          y: orders.map(x => x.amount),
          name: key,
          type: "bar"
        }))}
      layout={{
        title: props.name,
        barmode: "relative",
        yaxis: {
          type: "log",
          title: "Amount"
        },
        xaxis: {
          title: "Price"
        }
      }}
    />
  </Grid>
);

export default OrderChart;
