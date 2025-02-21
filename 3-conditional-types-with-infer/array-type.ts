export type ArrayType<T> = T extends (infer X)[] ? X : never;

type Example_1 = ArrayType<string[]>;
//   ^?

type Example_2 = ArrayType<[0, 1, 2, 3, 4]>;
//   ^?

type Example_3 = ArrayType<[]>;
//   ^?
