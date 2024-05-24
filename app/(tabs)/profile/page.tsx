import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";

const getUser = async () => {
  const session = await getSession();

  if (session.id) {
    const user = db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) return user;
  }
  return notFound();
};

const Profile = async () => {
  const user = await getUser();
  const logOut = async () => {
    "use server";
    const session = await getSession();
    session.destroy();
    redirect("/");
  };
  return (
    <div>
      <h1>여기는 프로필 페이지야 안녕 {user?.username}</h1>
      <form action={logOut}>
        <button>Log out</button>
      </form>
    </div>
  );
};

export default Profile;
