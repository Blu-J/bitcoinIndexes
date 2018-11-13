import matches from "ts-matches";

export const matchOrder = matches.shape({
  price: matches.number,
  amount: matches.number,
  type: matches.some(matches.literal("bid"), matches.literal("ask")),
  serverName: matches.string
});
