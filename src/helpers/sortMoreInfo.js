export const sortMoreInfo = (props) => {
  const allRepoInfo = [];

  for (let key in props) {
    if (typeof props[key] !== "boolean" && typeof props[key] !== "object") {
      allRepoInfo.push(`${key}: ${props[key]}`);
    }
  }

  return allRepoInfo;
};
