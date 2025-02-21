export type IsString<T> = T extends string ? true : false;

type Example_1 = IsString<"24">;
//   ^?

type Example_2 = IsString<42>;
//   ^?
