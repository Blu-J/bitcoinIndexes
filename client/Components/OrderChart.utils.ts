
type GroupPair<A> = [string, A[]];
export const group = <A extends object>(values: A[], getKey: (a: A) => string): GroupPair<A>[] => {
  return values
  .reduce((acc: GroupPair<A>[], a) => {
    const aKeyValue = getKey(a);
    const index = acc.map(([keyValue]) => keyValue).indexOf(aKeyValue);
    if (index < 0) {
      return [...acc, [aKeyValue, [a]]] as any;
    }
    acc[index][1].push(a);
    return acc;
  }, [])
}