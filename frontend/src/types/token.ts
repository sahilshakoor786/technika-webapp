import { User } from "./user";

export type Token = {
  id: string;
  token: string;
  tscId: string;
  user: User;
};

export function getToken(): Token | undefined {
  const ts = localStorage.getItem("token");
  if (ts) {
    return JSON.parse(ts);
  }
}
