export type EvenDigit = 0 | 2 | 4 | 6 | 8;
export type IsEven<T extends number> = `${T}` extends `${
  | number
  | ""}${EvenDigit}`
  ? true
  : false;

type Example_1 = IsEven<42>;
//   ^?

type Example_2 = IsEven<13>;
//   ^?
