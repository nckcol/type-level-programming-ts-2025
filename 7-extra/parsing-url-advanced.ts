import { Equals } from "../2-conditional-types/equals";
import { If } from "../2-conditional-types/if";
import { Split } from "../4-recursive-types/split";
import { Expect } from "../utils/expect";
import { UnionToArray } from "./union-to-array";

// input
type MyTemplate =
  "user/{user.first_name}/{user.last_name}/post/{post.id:number}/comments";
// expected output
type MyParameters = {
  user: { first_name: string; last_name: string };
  post: { id: number };
};

type Test_1 = Expect<Equals<UrlParameters<MyTemplate>, MyParameters>>;

type Example_1 = UrlParameters<"/{user.name}/">;
//   ^?

type Example_2 = UrlParameters<"/{user.age:number}/">;
//   ^?

type Example_3 = UrlParameters<"/{user.age}/{user:string}">;
//   ^?

// solution
type UrlParameters<T extends string> = DeepMergeAll<
  UnionToArray<
    {
      [K in Split<T, "/">]: PathToObject<
        ToPropertyName<ToProperty<K>>,
        ToPropertyType<ToProperty<K>>
      >;
    }[Split<T, "/">]
  >
>;

type ToType<T extends string> = If<
  Equals<T, "string">,
  string,
  If<Equals<T, "number">, number, If<Equals<T, "boolean">, boolean>>
>;

type ToPropertyName<TProperty> = TProperty extends `${infer TName}:${string}`
  ? TName
  : TProperty;

type ToPropertyType<TProperty> = TProperty extends `${string}:${infer TType}`
  ? ToType<TType>
  : string;

type ToProperty<Part extends string> = Part extends `{${infer TProperty}}`
  ? TProperty
  : never;

type DeepMergeProperties<A, B> = A extends object
  ? B extends object
    ? DeepMerge<A, B>
    : never
  : never;
type DeepMerge<A extends object, B extends object> = Simplify<
  // Case in rule 1: The destination contains the key but the source doesn't.
  {
    [Key in keyof A as Key extends keyof B ? never : Key]: A[Key];
  } & {
    // Case in rule 2: The source contains the key but the destination doesn't.
    [Key in keyof B as Key extends keyof A ? never : Key]: B[Key];
  } & {
    // Case in rule 3: Both the source and the destination contain the key.
    [Key in keyof B as Key extends keyof A ? Key : never]: Key extends keyof A
      ? DeepMergeProperties<A[Key], B[Key]>
      : never;
  }
>;
type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};

type DeepMergeAll<T, S extends object = {}> = T extends [
  infer X extends object,
  ...infer Rest extends object[]
]
  ? DeepMergeAll<Rest, DeepMerge<X, S>>
  : S;

type PathToObject<
  Path extends string,
  TValue = unknown
> = Path extends `${infer TItem}.${infer TRest}`
  ? { [x in TItem]: PathToObject<TRest, TValue> }
  : { [x in Path]: TValue };
