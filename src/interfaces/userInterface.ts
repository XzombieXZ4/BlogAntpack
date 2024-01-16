import { Gender, NameForm, Picture } from "./randomUserApiI";
//interfaces for Mi App

export interface Login {
  username: string;
  password: string;
}

export interface LoginI extends Login {
  id: string;
}

export interface Account {
  gender: Gender;
  name: NameForm;
  email?: string;
  login: LoginI;
  cell?: string;
  phone?: string;
  location?: Location;
  nat?: string;
  picture?: Picture;
}
