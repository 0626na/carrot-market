import db from "@/lib/db";

const isExistUserWithGitHub = async (github_id: string) => {
  const user = await db.user.findUnique({
    where: {
      github_id,
    },
    select: {
      id: true,
    },
  });

  return user;
};

export default isExistUserWithGitHub;
