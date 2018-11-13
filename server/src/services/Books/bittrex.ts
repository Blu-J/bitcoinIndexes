import fetch from "node-fetch";
import matches from "ts-matches";
import { Order } from "../types";

const myMatches = (() => {
  const order = matches.shape({
    Quantity: matches.number,
    Rate: matches.number
  });
  const book = matches.shape({
    buy: matches.arrayOf(order),
    sell: matches.arrayOf(order)
  });
  const response = matches.shape({
    success: matches.boolean,
    message: matches.string,
    result: book
  });
  return {
    order,
    response,
    book
  };
})();
const serverName = "bittrex";

const URL = "https://bittrex.com/api/v1.1/public/getorderbook";
const literal = <S extends string>(s: S) => s;
export async function orderBook(params: { market: string }): Promise<Order[]> {
  const rawResponse = await fetch(
    `${URL}?market=BTC-${params.market}&type=both`
  );
  const jsonResponse = await rawResponse.json();
  return myMatches.response.apply(jsonResponse).fold({
    left: () => [],
    right: parsedResponse => [
      ...parsedResponse.result.buy.map(({ Quantity: amount, Rate: price }) => ({
        price,
        amount,
        type: literal("bid"),
        serverName
      })),
      ...parsedResponse.result.sell.map(
        ({ Quantity: amount, Rate: price }) => ({
          price,
          amount,
          type: literal("ask"),
          serverName
        })
      )
    ]
  });
}
