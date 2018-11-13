import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import dynamic from "next/dynamic";
import { PlotParams } from "react-plotly.js";
import { Column, Table } from "react-virtualized";
import matches from "ts-matches";
import withHooks, { useReducer } from "react-with-hooks";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import produce from "immer";
import {
  FormControl,
  InputLabel,
  Input,
  Checkbox,
  ListItemText
} from "@material-ui/core";

export const matchOrder = matches.shape({
  price: matches.number,
  amount: matches.number,
  type: matches.some(matches.literal("bid"), matches.literal("ask")),
  serverName: matches.string
});

type Order = typeof matchOrder._TYPE;

const Plot = dynamic<PlotParams>(import("../Components/plotly") as any, {
  ssr: false
});

const QUERY = gql`
  query Orders($market: String!, $exchanges: [String]!) {
    orders(exchanges: $exchanges, market: $market) {
      price
      amount
      serverName
      type
    }
  }
`;

enum Market {
  ETH = "ETH",
  DOGE = "DOGE",
  LTC = "LTC"
}

const allMarkets: [string, Market][] = [
  ["Ehtereum", Market.ETH],
  ["Doge Coin", Market.DOGE],
  ["Lite Coin", Market.LTC]
];

enum Exchange {
  poloniex = "poloniex",
  bittrex = "bittrex",
  gdax = "gdax",
  gemini = "gemini"
}

const allExchanges: [string, Exchange][] = [
  ["Poloniex", Exchange.poloniex],
  ["Bittrex", Exchange.bittrex],
  ["GDAX", Exchange.gdax],
  ["Gemini", Exchange.gemini]
];

type State = {
  market: Market;
  exchanges: Exchange[];
};
const defaultState: State = {
  market: Market.DOGE,
  exchanges: [Exchange.bittrex, Exchange.poloniex]
};
const reducer = (state: State, update: (state: State) => void | State) => {
  return produce(state, update);
};
export default withHooks(function Index() {
  const [state, update] = useReducer(reducer, defaultState);
  return (
    <>
      <Head>
        <title>Bitcoin Books</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Select
            value={state.market}
            onChange={event =>
              update(x => {
                x.market = event.target.value;
              })
            }
          >
            {allMarkets.map(([name, market]) => (
              <MenuItem key={market} value={market}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <InputLabel htmlFor="select-multiple-checkbox">
              Exchanges
            </InputLabel>
            <Select
              multiple
              value={state.exchanges}
              onChange={element =>
                update(x => {
                  x.exchanges = element.target.value;
                })
              }
              input={<Input id="select-multiple-checkbox" />}
              renderValue={(selected: string[]) => selected.join(", ")}
            >
              {allExchanges.map(([name, value]) => (
                <MenuItem key={name} value={value}>
                  <Checkbox checked={state.exchanges.indexOf(value) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Query
          query={QUERY}
          variables={{
            market: state.market,
            exchanges: state.exchanges
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :({JSON.stringify(error, null, 2)}</p>;
            console;
            const orders: Order[] = matches
              .shape({ orders: matches.arrayOf(matchOrder) })
              .unsafeCast(data).orders;

            const asks = orders.filter(x => x.type === "ask");
            const bids = orders.filter(x => x.type === "bid");
            type GroupPair = [string, Order[]];
            return (
              <>
                <Grid item xs={6}>
                  <Plot
                    data={asks
                      .reduce((acc: GroupPair[], order) => {
                        const index = acc
                          .map(([a]) => a)
                          .indexOf(order.serverName);
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
                      title: "Asks",
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
                <Grid item xs={6}>
                  <Plot
                    data={bids
                      .reduce((acc: GroupPair[], order) => {
                        const index = acc
                          .map(([a]) => a)
                          .indexOf(order.serverName);
                        if (index === -1) {
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
                      title: "Bids",
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
                <Grid item xs={6}>
                  <h1>Asks Table</h1>
                  <Table
                    width={600}
                    height={500}
                    headerHeight={30}
                    rowHeight={50}
                    rowCount={bids.length}
                    rowGetter={({ index }: { index: number }) => bids[index]}
                  >
                    <Column label="Rate" dataKey="price" width={300} />
                    <Column label="Amount" dataKey="amount" width={300} />
                    <Column
                      label="Exchange Name"
                      dataKey="serverName"
                      width={300}
                    />
                  </Table>
                </Grid>
                <Grid item xs={6}>
                  <h1>Bids Table</h1>
                  <Table
                    width={600}
                    height={500}
                    headerHeight={30}
                    rowHeight={50}
                    rowCount={asks.length}
                    rowGetter={({ index }: { index: number }) => asks[index]}
                  >
                    <Column label="Rate" dataKey="price" width={300} />
                    <Column label="Amount" dataKey="amount" width={300} />
                    <Column
                      label="Exchange Name"
                      dataKey="serverName"
                      width={300}
                    />
                  </Table>
                </Grid>
              </>
            );
          }}
        </Query>
      </Grid>
    </>
  );
});
