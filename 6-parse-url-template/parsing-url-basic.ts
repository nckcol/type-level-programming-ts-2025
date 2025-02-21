/**
 * Parsing URL template with typed parameters
 *
 * @example
 * ```ts
 * const ROUTE_USER_POST_COMMENTS = "user/{user_name:string}/post/{post_id:number}/comments" as const;
 *
 * function navigateTo<TRoute extends string>(route: TRoute, params: UrlParameters<TRoute>) {
 *   // navigation logic
 * }
 *
 * navigateTo(ROUTE.USER_COMMENTS, {
 *   user_name: "nikita",
 *   post_id: 435
 * });
 * ```
 */

import { Equals } from "../2-conditional-types/equals";
import { If } from "../2-conditional-types/if";
import { Split } from "../4-recursive-types/split";
import { Expect } from "../utils/expect";

// input
type MyTemplate = "user/{user_name:string}/post/{post_id:number}/comments";
// expected output
type MyParameters = { user_name: string; post_id: number };
// calculated output
type MyResult = UrlParameters<MyTemplate>;

type Test_1 = Expect<Equals<MyResult, MyParameters>>;
type Test_2 = Expect<Equals<UrlParameters<"anything/without/params">, {}>>;
type Test_3 = Expect<
  Equals<UrlParameters<"default/type/{id}">, { id: string }>
>;
type Test_4 = Expect<
  Equals<
    UrlParameters<"string/{id:string}/{id:number}">,
    { id: string | number }
  >
>;

// solution
type UrlParameters<T extends string> = {
  [K in Split<T, "/"> as ToPropertyName<ToProperty<K>>]: ToPropertyType<
    ToProperty<K>
  >;
};

type ToProperty<TPart extends string> = TPart extends `{${infer TProperty}}`
  ? TProperty
  : never;

type ToPropertyName<TProperty extends string> =
  TProperty extends `${infer TName}:${string}` ? TName : TProperty;

type ToPropertyType<TProperty> = TProperty extends `${string}:${infer TType}`
  ? ToType<TType>
  : string;

type ToType<T extends string> = If<
  Equals<T, "number">,
  number,
  If<Equals<T, "boolean">, boolean, string>
>;
