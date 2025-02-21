type Num_0<T extends number, M extends unknown[] = []> = T extends M["length"]
  ? M
  : Num_0<T, [...M, any]>;

/** number representation on type-level */
export type Num<T extends number> = Num_0<T>;

/** any number represented on type-level */
export type AnyNum = unknown[];

/** extract number represented on type-level to normal number */
export type ExtractNum<T extends AnyNum> = T["length"];
