export enum Gender {
  Male = "Male",
  Female = "Female",
}

export type Movie = {
  _id?: string;
  title: string;
  category: string;
  cast: string[];
};

export type Actor = {
  _id?: string;
  name: string;
  age: number;
  gender: "Male" | "Female";
};
