export type Equals<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? true
    : false
  : false;

type Example_1 = Equals<"🍌", "🍌">;
//   ^?

type Example_2 = Equals<"🍏", "🍌">;
//   ^?

type Example_3 = Equals<string, "🍌">;
//   ^?

type Example_4 = Equals<"🍌", string>;
//   ^?
