export const formatToWon = (price: number) => {
  return price.toLocaleString("ko-KR");
};

export const formatToTimeAgo = (date: string) => {
  const dayInMS = 1000 * 60 * 60 * 24;
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const diff = Math.round((time - now) / dayInMS);
  const formatter = new Intl.RelativeTimeFormat("ko");

  return formatter.format(diff, "days");
};
