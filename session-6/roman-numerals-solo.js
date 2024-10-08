const toRoman = (num) => {
  let total = num;
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";

  for (i in lookup) {
    while (total >= lookup[i]) {
      roman += i;
      total -= lookup[i];
    }
  }
  return roman;
}

console.log(toRoman(1238));
console.log(toRoman(1));
console.log(toRoman(3));
console.log(toRoman(4));