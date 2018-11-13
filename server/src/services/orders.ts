import { Order } from "./types";
import * as bittrex from "./Books/bittrex";
import * as poloniex from "./Books/poloniex";
import * as gdax from "./Books/gdax";
import * as gemini from "./Books/gemini";
import matches from "ts-matches";
import { flatten } from "./utils";

const mServer = matches.some(
  matches.literal("poloniex"),
  matches.literal("bittrex"),
  matches.literal("gdax"),

  matches.literal("gemini")
);
const validParams = matches.shape({
  exchanges: matches.arrayOf(mServer)
});

const orderBooks = {
  bittrex: bittrex.orderBook,
  poloniex: poloniex.orderBook,
  gdax: gdax.orderBook,
  gemini: gemini.orderBook
};
export async function orders(
  _: any,
  params: {
    exchanges: string;
    market: string;
  }
): Promise<Order[]> {
  const { exchanges } = validParams.unsafeCast(params);
  const allExchanges = await Promise.all(
    exchanges.filter(mServer.test).map(exchange => orderBooks[exchange](params))
  );
  return flatten<Order>(allExchanges);
}
