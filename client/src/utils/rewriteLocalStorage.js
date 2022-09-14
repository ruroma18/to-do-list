export default function rewritreLocalStorage(key, state) {
  localStorage.removeItem(key);
  state.map((item) => {
    return localStorage.setItem(
      key,
      JSON.stringify([...JSON.parse(localStorage.getItem(key) || "[]"), item])
    );
  })
  
}
