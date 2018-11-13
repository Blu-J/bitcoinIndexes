import * as React from "react";
import gql from "graphql-tag";
import matches from "ts-matches";
import withHooks, { useReducer, useState, useEffect } from "react-with-hooks";
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
import { Order, matchOrder } from "../lib/Order";
import OrderTable from "../Components/OrderTable";
import OrderChart from "../Components/OrderChart";
import useQuery from "../lib/useQuery";

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
  const query = useQuery(QUERY, state);
  const data = query.data || {
    orders: []
  };
  const orders: Order[] = matches
    .shape({ orders: matches.arrayOf(matchOrder) })
    .unsafeCast(data).orders;

  const asks = orders.filter(x => x.type === "ask");
  const bids = orders.filter(x => x.type === "bid");
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
        {query.loading ? (
          <p>Loading...</p>
        ) : query.error ? (
          <p>Error :({JSON.stringify(query.error, null, 2)}</p>
        ) : (
          <>
            <OrderChart name="Asks" orders={asks} />
            <OrderChart name="Bids" orders={bids} />
            <OrderTable name="Asks Table" orders={asks} />
            <OrderTable name="Bids Table" orders={bids} />
          </>
        )}
      </Grid>
    </>
  );
});
