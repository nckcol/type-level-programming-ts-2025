export type Range<
  TLength extends number,
  TMemo extends unknown[] = []
> = TLength extends TMemo["length"]
  ? TMemo[number]
  : Range<TLength, [...TMemo, TMemo["length"]]>;

type Example_1 = Range<10>;
//   ^?

type Example_2 = Range<1>;
//   ^?

type Example_3 = Range<0>;
//   ^?
