export default function average(arr) {
  const length = arr.length;

  let i = 0;
  let sum = 0;

  while (i < length) {
    sum += arr[i];
    i += 1;
  }

  return sum;
}
