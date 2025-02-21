import { AnyArray } from "../utils/any-array";

export type First<TList extends AnyArray> = TList extends [
  infer TFirst,
  ...AnyArray
]
  ? TFirst
  : never;

type Example_1 = First<[0, 1, 2, 3, 4]>;
//   ^?

type Example_2 = First<[]>;
//   ^?
