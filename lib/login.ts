import { redirect } from "next/navigation";
import getSession from "./session";

const userLogin = async (id: number) => {
  const session = await getSession();
  session.id = id;
  await session.save();
  return redirect("/profile");
};

export default userLogin;
