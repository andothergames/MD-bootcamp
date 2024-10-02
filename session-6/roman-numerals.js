const toRoman = (number) => {
  let count = number;
  const romanNumerals = [];

  while (count > 0) {
    if (count >= 5) {
      romanNumerals.push("V");
      count -= 5;
    //   console.log(count, "line 9");
    }

    if (count === 4) {
      romanNumerals.push("IV");
      count -= 4;
    //   console.log(count, "line 15");
    }

    if (count < 4) {
      for (let i = 0; i < count; i++) {
        romanNumerals.push("I");
        count -= 1;
        // console.log(count, "line 22");
      }
    }
  }

  return romanNumerals.join("");
};
console.log(toRoman(1));
console.log(toRoman(2));
console.log(toRoman(3));
console.log(toRoman(4));
console.log(toRoman(5));
console.log(toRoman(6));
console.log(toRoman(7));
console.log(toRoman(8));


//1 - 9
// I
// II
// III
// IV
// V
// VI
// VII
// VIII
// IX
// X
// 11-20
// XI - 11
// XII - 12
// XIII - 13
// XIV - 14
// XV - 15
// XVI - 16
// XVII - 17
// XVIII - 18
// XIX - 19
// XX - 20

//
// 49 = XL IX
// 50 = L
