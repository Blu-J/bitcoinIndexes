import { useState, useEffect } from "react-with-hooks";

import initApollo from "./initApollo";

import { ApolloClient } from "apollo-boost";

export type QueryState =
  | {
      loading: true;
      error?: unknown;
      data?: unknown;
    }
  | {
      loading: false;
      error?: any;
      data?: unknown;
    };
const useQuery = <Args extends {}>(
  query: string,
  variables: Args
): QueryState => {
  const [state, updateState] = useState({ loading: true } as QueryState);
  useEffect(
    () => {
      (initApollo({}) as ApolloClient<any>)
        .query({
          query,
          variables
        })
        .then(
          goodValue => {
            updateState({
              loading: false,
              data: goodValue.data
            });
          },
          badValue => {
            updateState({
              loading: false,
              error: String(badValue)
            });
          }
        );
      return () => void 0;
    },
    [variables]
  );
  return state;
};

export default useQuery;
