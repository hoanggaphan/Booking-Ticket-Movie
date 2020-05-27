export function loginAuth(item) {
  if (!localStorage.getItem(item)) {
    return false;
  }
  return true;
}
