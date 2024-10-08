export function objectsAreEqual(object1, object2) {
  for (let key of Object.keys(object1)) {
    if (!(key in object2)) {
      return false;
    }
  }

  for (let key of Object.keys(object2)) {
    if (!(key in object1)) {
      return false;
    }
  }

  return true;
}
