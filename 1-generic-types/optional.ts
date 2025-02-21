import { Equals } from "../2-conditional-types/equals";
import { Expect } from "../utils/expect";

export type Optional<T> = T | undefined;
// T - is type parameter

// Example
type OptionalNumber = Optional<number>; //=>
type OptionalString = Optional<string>; //=>

// Test
type Test_1 = Expect<Equals<Optional<number>, number | undefined>>;
type Test_2 = Expect<Equals<Optional<number>, number | undefined>>;
