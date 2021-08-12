import { parse, predicate } from "./index";

describe("query.parse", () => {
  it.each([
    ['key="one"', [{ field: "key", operator: "=", value: "one" }]],
    [
      'key="two" && value="three"',
      [
        { field: "key", operator: "=", value: "two" },
        "&&",
        { field: "value", operator: "=", value: "three" },
      ],
    ],
    [
      'title="one" && description!="two" || (key="a" && value="b")',
      [
        { field: "title", operator: "=", value: "one" },
        "&&",
        { field: "description", operator: "!=", value: "two" },
        "||",
        [
          {
            field: "key",
            operator: "=",
            value: "a",
          },
          "&&",
          {
            field: "value",
            operator: "=",
            value: "b",
          },
        ],
      ],
    ],
  ])("parses", (input, output) => {
    expect(parse(input)).toEqual(output);
  });
});

describe("query.predicate", () => {
  it.each([
    ['key="one"', [{ field: "key", operator: "=", value: "one" }]],
    // [
    //   'key="two" && value="three"',
    //   [
    //     { field: "key", operator: "=", value: "two" },
    //     "&&",
    //     { field: "value", operator: "=", value: "three" },
    //   ],
    // ],
    // [
    //   'title="one" && description!="two" || (key="a" && value="b")',
    //   [
    //     { field: "title", operator: "=", value: "one" },
    //     "&&",
    //     { field: "description", operator: "!=", value: "two" },
    //     "||",
    //     [
    //       {
    //         field: "key",
    //         operator: "=",
    //         value: "a",
    //       },
    //       "&&",
    //       {
    //         field: "value",
    //         operator: "=",
    //         value: "b",
    //       },
    //     ],
    //   ],
    // ],
  ])("parses", (input, output) => {
    console.log(
      input,
      predicate(output as any).map((x: any) => x.toString())
    );
  });
});
