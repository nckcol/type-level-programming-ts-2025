import { AnyNum, ExtractNum, Num } from "./num";

export type Sum<A extends AnyNum, B extends AnyNum> = [...A, ...B];

type Example_1 = ExtractNum<Sum<Num<1>, Num<2>>>;
//   ^?

type Example_2 = ExtractNum<Sum<Num<34>, Num<42>>>;
//   ^?

type Example_3 = ExtractNum<Sum<Num<0>, Num<0>>>;
//   ^?
