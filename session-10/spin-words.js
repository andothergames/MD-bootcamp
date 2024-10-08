const spinWords = (string) => {
  const array = string.split(" ");
  const jumbledArray = [];

  for (let word of array) {
    if (word.length >= 5) {
      jumbledArray.push(jumbleWord(word));
    } else {
      jumbledArray.push(word);
    }
  }

  return jumbledArray.join(" ");
};

const jumbleWord = (word) => {
  return word.split("").reverse().join("");
};

const message = "Hey fellow coders";

console.log(spinWords(message));
