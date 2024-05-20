import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

const getSession = () => {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: "loginCookie",
    password: process.env.COOKIE_PASSWORD!,
  });
};

export default getSession;
