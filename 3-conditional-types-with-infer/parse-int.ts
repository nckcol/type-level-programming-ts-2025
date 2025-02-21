export type ParseInt<TNumber> = TNumber extends `${infer X extends number}`
  ? number extends X
    ? never
    : X
  : never;

type Example_1 = ParseInt<"42">;
//   ^?

type Example_2 = ParseInt<"1.1">;
//   ^?

type Example_3 = ParseInt<"cranberry">;
//   ^?

type Example_4 = ParseInt<"00001">;
//   ^?
