export type Validation<TObject extends object> = {
  [K in keyof TObject]: boolean;
};

type Example_1 = Validation<{ first_name: string; age: number }>;
//   ^?
