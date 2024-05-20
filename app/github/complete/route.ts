import db from "@/lib/db";
import userLogin from "@/lib/login";
import { notFound } from "next/navigation";
import { NextRequest } from "next/server";
import getAccessToken from "./_lib/getAccessToken";
import getGitHubUserProfile from "./_lib/getGitHubUserProfile";
import getGitHubUserEmail from "./_lib/getGitHubUserEmail";
import isExistUserWithGitHub from "./_lib/isUser";

export const GET = async (request: NextRequest) => {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) return notFound();
  const { error, access_token } = await getAccessToken(code);

  if (error) {
    return new Response(null, {
      status: 400,
    });
  }

  const { id, login, avatar_url } = await getGitHubUserProfile(access_token);
  const { email } = await getGitHubUserEmail(access_token);

  const isUserRegistered = await isExistUserWithGitHub(`${id}`);

  if (isUserRegistered?.id) {
    return await userLogin(isUserRegistered.id);
  }

  const validateUser = await db.user.findUnique({
    where: {
      username: login,
    },
    select: {
      id: true,
    },
  });

  if (validateUser) {
    return await userLogin(validateUser.id);
  } else {
    const newUser = await db.user.create({
      data: {
        github_id: `${id}`,
        avatar: avatar_url,
        username: login,
        email,
      },
    });
    await userLogin(newUser.id);
  }
};
