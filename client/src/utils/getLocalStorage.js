export default function getDataFromLocalStorage (key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
