// Backend
export interface ObjectAuth {
  _id?: string;
  name?: string;
  email: string;
  password: string;
  role: string;
}
export type TAuth = {
  message: string;
  flag?: boolean;
  data: Array<ObjectAuth>;
  desc: string;
};

export type TObjectAuth = {
  name?: string;
  email: string;
  password: string;
};
