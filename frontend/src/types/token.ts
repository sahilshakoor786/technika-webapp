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

export function setUser(user: User): void {
  const tsstring = localStorage.getItem("token");

  if (tsstring) {
    const ts = JSON.parse(tsstring) as Token;
    ts.user = user;
    localStorage.setItem("token", JSON.stringify(ts));
  }
}
