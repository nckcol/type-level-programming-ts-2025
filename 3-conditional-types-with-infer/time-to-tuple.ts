export type TimeToTuple<T extends string> =
  T extends `${infer THour}:${infer TMinute}` ? [THour, TMinute] : never;

type Example_1 = TimeToTuple<"11:20">;
//   ^?

type Example_2 = TimeToTuple<"23:59">;
//   ^?
