export default function rewritreLocalStorage(key, value) {
  localStorage.removeItem(key);
  return localStorage.setItem(
    key,
    JSON.stringify([...JSON.parse(localStorage.getItem(key) || "[]"), value])
  );
}
