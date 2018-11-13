import fetch from "node-fetch";
import matches from "ts-matches";
import { Order } from "../types";
import { number } from "prop-types";

const myMatches = (() => {
  const pair = matches.tuple([matches.string, matches.string, matches.string]);
  const description = matches.tuple([
    matches.string,
    matches.string,
    matches.string
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
const URL = (market: string) =>
  `https://api-public.sandbox.gdax.com/products/${market}-USD/book`;
const literal = <S extends string>(s: S) => s;
const serverName = literal("gdax");
export async function orderBook(params: { market: string }): Promise<Order[]> {
  const rawResponse = await fetch(`${URL(params.market)}?level=3`);
  const jsonResponse = await rawResponse.json();
  const output = myMatches.response.apply(jsonResponse).fold({
    left: () => [],
    right: parsedResponse => {
      const bids = parsedResponse.bids.filter(myMatches.pair.test);
      const asks = parsedResponse.asks.filter(myMatches.pair.test);
      return [
        ...asks.map(([price, size]) => ({
          price: Number(price),
          amount: Number(size),
          type: literal("ask"),
          serverName
        })),
        ...bids.map(([price, size]) => ({
          price: Number(price),
          amount: Number(size),
          type: literal("bid"),
          serverName
        }))
      ];
    }
  });
  return output;
}
