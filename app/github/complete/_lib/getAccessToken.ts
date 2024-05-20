const getAccessToken = async (code: string) => {
  let accessTokenURL = "https://github.com/login/oauth/access_token";
  const accessTokenParams = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    code,
  }).toString();

  const url = `${accessTokenURL}?${accessTokenParams}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });
  const { error, access_token } = await response.json();

  return {
    error,
    access_token,
  };
};

export default getAccessToken;
