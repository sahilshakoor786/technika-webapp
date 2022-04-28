import { User } from "./user";

export type Token = {
  token: string;
  tscId: string;
  user: User;
};
