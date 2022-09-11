export default function setDataToLocalStorage(key, value) {
  return localStorage.setItem(
    key,
    JSON.stringify([
      ...JSON.parse(localStorage.getItem(key) || "[]"),
      value,
    ])
  );
}
