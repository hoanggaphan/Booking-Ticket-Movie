export function loginAuth() {
  if (!localStorage.getItem("user")) {
    return false;
  }
  return true;
}
