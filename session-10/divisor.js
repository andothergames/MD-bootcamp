const returnDivisors = (int) => {
  const divisors = [];
  for (let i = 2; i < int; i++) {
    if (int % i === 0) {
      divisors.push(i);
    }
  }
  return !divisors.length
    ? `${int} is a prime number`
    : `${int} is divisible by ${divisors.join(", ")}`;
};

console.log(returnDivisors(12));
console.log(returnDivisors(25));
console.log(returnDivisors(13));
