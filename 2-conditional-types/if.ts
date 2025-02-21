import { Equals } from "./equals";
import { IsNumber } from "./is-number";

export type If<C, T, F = never> = C extends true ? T : F;

type Example_1 = If<IsNumber<42>, "number", "not_a_number">;
//   ^?

type Example_2 = If<Equals<"A", "A">, "yes", "no">;
//   ^?
