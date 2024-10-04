export function sumOfSequence(beginning, end, step) {
  if (beginning < 0 || end < 0 || step < 0) {
    return "Please only give positive integers as parameters";
  }
  let sum = 0;
  for (let i = beginning; i < end + 1; i += step) {
    sum += i;
  }
  return sum;
}
