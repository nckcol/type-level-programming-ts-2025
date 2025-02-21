export type Entry<TObject extends object, TKey extends keyof TObject> = [
  TKey,
  TObject[TKey]
];

export type Entries<TObject extends object> = {
  [K in keyof TObject]: Entry<TObject, K>;
}[keyof TObject];

type Example_1 = Entries<{ first_name: string; age: number }>;
//   ^?
