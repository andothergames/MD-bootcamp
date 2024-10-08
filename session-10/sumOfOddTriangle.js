const sumOfOdd = (tri, row) => {
  const level = row - 1;
  if (tri[level] === undefined) return "Row does not exist";
  const sum = tri[level].reduce((acc, cv) => {
    return acc + cv;
  });
  return sum;
};

const triangle = [
  [1],
  [3, 5],
  [7, 9, 11],
  [13, 15, 17, 19],
  [21, 23, 25, 27, 29],
];

console.log(sumOfOdd(triangle, 1));
console.log(sumOfOdd(triangle, 2));
console.log(sumOfOdd(triangle, 3));
console.log(sumOfOdd(triangle, 4));
console.log(sumOfOdd(triangle, 5));
console.log(sumOfOdd(triangle, 6));
