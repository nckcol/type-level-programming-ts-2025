export type TupleToTime<T extends string[]> = T extends [
  infer THour extends string,
  infer TMinute extends string
]
  ? `${THour}:${TMinute}`
  : never;

type Example_1 = TupleToTime<["11", "20"]>;
//   ^?
