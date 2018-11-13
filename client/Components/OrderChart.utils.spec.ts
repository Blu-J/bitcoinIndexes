import * as orderChart from "./OrderChart.utils";
import * as fc from "fast-check";

describe("orderChart. orderBy", () => {
  it("should be able to get answer", () => {
    const generator = fc
      .record({
        keyIndex: fc.string(1, 1000),

        valueSets: fc
          .array(
            fc.tuple(
              fc.string(1, 1000),
              fc
                .array<object>(fc.object().filter(x => !!x))
                .filter(x => x.length > 0)
            )
          )
          .filter(x => x.length > 0)
      })
      .filter(({ valueSets }) => valueSets.length > 0)
      .map(({ keyIndex, valueSets }) => ({
        keyIndex,
        valueSets: valueSets.map<[string, object]>(([keyValue, values]) => [
          keyValue,
          values.map(obj => ({ ...obj, [keyIndex]: keyValue }))
        ])
      }))
      .map(obj => ({
        ...obj,

        input: obj.valueSets.reduce(
          (acc, xs) => [...acc, ...(xs[1] as Array<object>)],
          [] as any
        )
      }));

    fc.assert(
      fc.property(generator, generated => {
        expect(
          orderChart.group(generated.input, x => x[generated.keyIndex])
        ).toEqual(generated.valueSets);
      }),
      {
        examples: [
          [
            {
              keyIndex: "test",
              valueSets: [
                ["a", [{ a: true, test: "a" }]],
                ["b", [{ b: true, test: "b" }]]
              ],
              input: [
                {
                  a: true,
                  test: "a"
                },
                {
                  b: true,
                  test: "b"
                }
              ]
            }
          ]
        ]
      }
    );
  });
});
