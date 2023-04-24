// Backend
export interface ObjectAuth {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
}
export type TAuthSignup = {
  message: string;
  flag?: boolean;
  data: Array<ObjectAuth> | [];
  desc: string;
};
export type TAuthLogin = {
  message: string;
  flag?: boolean;
  data?: Array<ObjectAuth> | [];
  token: string;
  refreshToken: string;
  desc: string;
};

export type TObjectAuth = {
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
};
