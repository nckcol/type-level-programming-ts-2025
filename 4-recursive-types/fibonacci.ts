import { AnyNum, ExtractNum, Num } from "./num";
import { Sum } from "./sum";

export type Fibonacci<
  T,
  TCurrent extends AnyNum = Num<0>,
  TN1 extends AnyNum = Num<0>,
  TN2 extends AnyNum = Num<1>
> = TCurrent["length"] extends T
  ? TN1
  : Fibonacci<T, Sum<TCurrent, Num<1>>, Sum<TN1, TN2>, TN1>;

type Example_1 = ExtractNum<Fibonacci<1>>;
//   ^?

type Example_2 = ExtractNum<Fibonacci<2>>;
//   ^?

type Example_3 = ExtractNum<Fibonacci<3>>;
//   ^?

type Example_4 = ExtractNum<Fibonacci<4>>;
//   ^?

type Example_5 = ExtractNum<Fibonacci<5>>;
//   ^?

type Example_6 = ExtractNum<Fibonacci<6>>;
//   ^?

type Example_7 = ExtractNum<Fibonacci<7>>;
//   ^?
