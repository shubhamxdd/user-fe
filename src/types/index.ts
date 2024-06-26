export interface User {
  _id: string;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  domain: string;
  available: boolean;
}

export interface Team {
  _id: string;
  users: User[];
}
