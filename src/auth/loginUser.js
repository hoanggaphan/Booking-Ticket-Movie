export function loginUserAuth() {
  if (!localStorage.getItem("user")) {
    return false;
  }
  return true;
}
