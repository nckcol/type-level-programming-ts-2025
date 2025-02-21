export type IsNumber<T> = T extends number ? true : false;

type Example_1 = IsNumber<"24">;
//   ^?

type Example_2 = IsNumber<42>;
//   ^?
