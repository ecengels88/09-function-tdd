export default function (a, b) {
  // if (a[0] !== b[0] || a[1] !== b[1] || a.length !== b.length) {
  //   return false;
  // } else {
  //   return true;
  // }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}
