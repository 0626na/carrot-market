const getGitHubUserEmail = async (token: string) => {
  const userEmailResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-cache",
  });

  return await userEmailResponse.json();
};

export default getGitHubUserEmail;
