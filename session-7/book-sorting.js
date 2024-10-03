// charCodeAt Notes
let char = "A";
let word = "ABCD";
// console.log(char.charCodeAt(0));
// console.log(word.charCodeAt(3));
// console.log("B".charCodeAt());

// PLAN
// Put titles in an array
// Work out the ASCII of each title - LOOP
// Split title into separate letters - LOOP
// Calculate the sum of the letters
// Put them in order of complexity

const bookTitles = [
  "The Catcher in the Rye",
  "To Kill a Mockingbird",
  "1984",
  "Moby Dick",
];

const sortBooks = (books) => {
    const arrayOfNumbers = [];
    // loop over books array
  for (title of books) {
    // for each title send that to calculateComplexity function
    arrayOfNumbers.push(calculateComplexity(title.split("")));
  }
  return arrayOfNumbers;
};

const calculateComplexity = (titleArray) => {
  const charCodes = [];
  for (letter of titleArray) {
    //push char code of letter to charCodes
    charCodes.push(letter.charCodeAt());
  }

  //reduce

  const initialValue = 0;
  const sum = charCodes.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sum;
};

console.log(sortBooks(bookTitles));
