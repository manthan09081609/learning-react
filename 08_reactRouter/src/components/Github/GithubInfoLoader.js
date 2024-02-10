export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/manthan09081609");

  return res.json();
};
