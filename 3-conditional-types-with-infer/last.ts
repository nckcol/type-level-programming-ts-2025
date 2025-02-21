import { AnyArray } from "../utils/any-array";

export type Last<TList extends AnyArray> = TList extends [
  ...AnyArray,
  infer TLast
]
  ? TLast
  : never;

type Example_1 = Last<[0, 1, 2, 3, 4]>;
//   ^?

type Example_2 = Last<[]>;
//   ^?
