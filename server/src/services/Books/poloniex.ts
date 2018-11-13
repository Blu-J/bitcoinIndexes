import fetch from "node-fetch";
import matches from "ts-matches";
import { Order } from "../types";

const myMatches = (() => {
  const pair = matches.tuple([
    matches.some(matches.string, matches.number),
    matches.number
  ]);
  const response = matches.shape({
    asks: matches.arrayOf(pair),
    bids: matches.arrayOf(pair)
  });
  return {
    pair,
    response
  };
})();
const URL = "https://poloniex.com/public";
const literal = <S extends string>(s: S) => s;
const serverName = literal("poloniex");
export async function orderBook(params: { market: string }): Promise<Order[]> {
  const rawResponse = await fetch(
    `${URL}?command=returnOrderBook&currencyPair=BTC_${params.market}&depth=500`
  );
  const jsonResponse = await rawResponse.json();
  return myMatches.response.apply(jsonResponse).fold({
    left: () => [],
    right: parsedResponse => [
      ...parsedResponse.asks.map(([rate, quantity]) => ({
        price: Number(rate),
        amount: quantity,
        type: literal("ask"),
        serverName
      })),
      ...parsedResponse.bids.map(([rate, quantity]) => ({
        price: Number(rate),
        amount: quantity,
        type: literal("bid"),
        serverName
      }))
    ]
  });
}
