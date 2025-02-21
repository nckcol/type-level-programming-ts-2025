import { If } from "../2-conditional-types/if";
import { IsEven } from "../2-conditional-types/is-even";
import { Range } from "../4-recursive-types/range";

export type FilterEven<T extends number> = keyof {
  [K in T as If<IsEven<K>, K, never>]: K;
};

type Example_1 = FilterEven<Range<10>>;
//   ^?

type Example_2 = FilterEven<1 | 3 | 5 | 7 | 9>;
//   ^?
