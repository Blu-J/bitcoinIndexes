import { Table, Column } from "react-virtualized";

import Grid from "@material-ui/core/Grid";

const OrderTable = (props: { orders: Order[]; name: string }) => (
  <Grid item xs={6}>
    <h1>{props.name}</h1>
    <Table
      width={600}
      height={500}
      headerHeight={30}
      rowHeight={50}
      rowCount={props.orders.length}
      rowGetter={({ index }: { index: number }) => props.orders[index]}
    >
      <Column label="Rate" dataKey="price" width={300} />
      <Column label="Amount" dataKey="amount" width={300} />
      <Column label="Exchange Name" dataKey="serverName" width={300} />
    </Table>
  </Grid>
);

export default OrderTable;
