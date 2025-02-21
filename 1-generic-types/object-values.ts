export type ObjectValues<T extends object> = T[keyof T];

//@ts-expect-error
type Test_1 = ObjectValues<number>;
// ❌ Type 'number' does not satisfy the constraint 'object'.

type Test_2 = ObjectValues<{ name: string; age: number }>;
//   ^? type Test_2 = string | number
