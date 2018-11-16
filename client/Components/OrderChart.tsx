import { Order } from "../lib/Order";
import Grid from "@material-ui/core/Grid";
import dynamic from "next/dynamic";
import { PlotParams } from "react-plotly.js";
import { group } from "./OrderChart.utils";

const Plot = dynamic<PlotParams>(import("../Components/plotly") as any, {
  ssr: false
});
const literal = <S extends string | number>(s: S) => s;
const OrderChart = (props: { orders: Order[]; name: string }) => (
  <Grid item xs={6}>
    <Plot
      className={`chart-${props.name.toLowerCase()}`}
      data={group(props.orders, o => o.serverName).map(([key, orders]) => ({
        x: orders.map(x => x.price),
        y: orders.map(x => x.amount),
        name: key,
        type: literal("bar")
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
