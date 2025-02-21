import { ObjectValues } from "../1-generic-types/object-values";
import { If } from "../2-conditional-types/if";
import { IsNumber } from "../2-conditional-types/is-number";

export type FilterNumber<TValues extends string | number> = ObjectValues<{
  [K in TValues as If<IsNumber<K>, K, never>]: K;
}>;

type Example_1 = FilterNumber<"34" | 42 | "japan">;
//   ^?
