import fetch from "node-fetch";
import matches from "ts-matches";
import { Order } from "../types";

const myMatches = (() => {
  const order = matches.shape({
    price: matches.string,
    amount: matches.string
  });
  const response = matches.shape({
    asks: matches.arrayOf(order),
    bids: matches.arrayOf(order)
  });
  return {
    order,
    response
  };
})();
const URL = (market: string) => `https://api.gemini.com/v1/book/${market}BTC`;
const literal = <S extends string>(s: S) => s;
const serverName = literal("gemini");
export async function orderBook(params: { market: string }): Promise<Order[]> {
  const url = `${URL(params.market)}?level=3`;
  const rawResponse = await fetch(url);
  const jsonResponse = await rawResponse.json();
  const output = myMatches.response.apply(jsonResponse).fold({
    left: (error) => {
      console.warn(`Gemini(${url}) has error ${error} with ${JSON.stringify(jsonResponse)}`)
      return []
    },
    right: parsedResponse => {
      const bids = parsedResponse.bids;
      const asks = parsedResponse.asks;
      return [
        ...asks.map(({ price, amount }) => ({
          price: Number(price),
          amount: Number(amount),
          type: literal("ask"),
          serverName
        })),
        ...bids.map(({ price, amount }) => ({
          price: Number(price),
          amount: Number(amount),
          type: literal("bid"),
          serverName
        }))
      ];
    }
  });
  return output;
}
