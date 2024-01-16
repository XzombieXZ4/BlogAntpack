//interface  for Response of RandomUsersApi

interface Log {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

type Gender = "male" | "female" | "Unespecified";

export interface NameForm {
  first: string;
  last: string;
  title?: string;
}

export interface Street {
  number: number;
  name: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

export interface Location {
  street?: Street;
  city?: string;
  country?: string;
  postcode?: number;
  state?: string;
  coordinates?: Coordinates;
  timezone?: Timezone;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Dob {
  age: number;
  date: string;
}

interface Id {
  name: string;
  value: string;
}

interface Registered {
  age: number;
  date: string;
}

export interface AccountResponse {
  login: Log;
  dob: Dob;
  id: Id;
  email: string;
  userId: number;
  gender: Gender;
  name: NameForm;
  location: Location;
  phone: string;
  cell: string;
  nat: string;
  picture: Picture;
  registered: Registered;
}

//interfaces for Mi App

export interface Login {
  username: string;
  password: string;
}

export interface LoginI extends Login {
  id: number;
}

export interface Account {
  gender: Gender;
  name: NameForm;
  email: string;
  login: LoginI;
  cell?: string;
  phone?: string;
  location?: Location;
  nat?: string;
  picture: Picture;
}
