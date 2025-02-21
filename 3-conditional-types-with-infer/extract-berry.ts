export type ExtractBerry<TBerry> = TBerry extends `${infer X}berry` ? X : never;

type Example_1 = ExtractBerry<"blueberry">;
//   ^?

type Example_2 = ExtractBerry<"blackberry">;
//   ^?

type Example_3 = ExtractBerry<"strawberry">;
//   ^?

type Example_4 = ExtractBerry<`${string}berry`>;
//   ^?
