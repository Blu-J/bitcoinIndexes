declare module "react-with-hooks" {
  export function useState<State>(
    state: State
  ): [State, (state: State) => void];
  export function useEffect(effect: () => () => void, watch?: any[]): void;
  export function useMemo<A>(memo: () => A, watch?: any[]): A;
  export function useReducer<
    State,
    Update extends (state: State, action: Action) => State,
    Action
  >(update: Update, state: State): [State, (action: Action) => void];
  export default function<X extends React.ComponentType<any>>(x: X): X;
}
