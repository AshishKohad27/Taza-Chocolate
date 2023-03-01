export type TReducerStateProduct = {
  loading: boolean;
  error: boolean;
  data: ObjectProduct[] | [];
  message: string;
  errorMessage: String;
};

export interface ObjectProduct {
  _id?: String;
  title: String;
  description: String;
  bar: String;
  caseBar: String;
  image: String;
  category: String;
  quantity: Number;
}

export type TReducerActionProduct = {
  type: string;
  payload?: any;
};
