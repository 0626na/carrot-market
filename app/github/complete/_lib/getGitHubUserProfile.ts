const getGitHubUserProfile = async (token: string) => {
  const userProfileResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-cache",
  });

  return await userProfileResponse.json();
};

export default getGitHubUserProfile;
