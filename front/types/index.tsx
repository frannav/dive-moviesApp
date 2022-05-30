export type Movie = {
  _id?: string;
  title: string;
  category: string;
  cast: string[];
};

export type Actor = {
  _id?: string;
  name: string;
  age: string;
  gender: "Male" | "Female";
};
