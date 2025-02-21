import { Equals } from "../2-conditional-types/equals";
import { Expect } from "../utils/expect";

export type Pair<T1, T2> = [T1, T2];

// Example
type Coordinates = Pair<number, number>; //=>
type MapEntry = Pair<string, unknown>; //=>

// Test
type Test_1 = Expect<Equals<Pair<number, string>, [number, string]>>;
type Test_2 = Expect<Equals<Pair<boolean, number>, [boolean, number]>>;
type Test_3 = Expect<Equals<Pair<unknown, unknown>, [unknown, unknown]>>;
