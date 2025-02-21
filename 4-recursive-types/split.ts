export type Split<
  TInput extends string,
  TSeparator extends string
> = TInput extends `${infer TFirst}${TSeparator}${infer TRest}`
  ? TFirst | Split<TRest, TSeparator>
  : TInput;

type Example_1 = Split<"red,blue,green", ",">;
//   ^?

type Example_2 = Split<",,,,,", ",">;
//   ^?

type Example_3 = Split<"red", ",">;
//   ^?
