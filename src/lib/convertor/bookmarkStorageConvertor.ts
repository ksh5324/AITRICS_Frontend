export const BookMarkStorageConvertor = () => {
  const localStorageArray = localStorage
    .getItem("bookmark")
    .split("*><")
    .filter((v) => v);
  const list = localStorageArray.map((v) => JSON.parse(v));
  return list;
};
