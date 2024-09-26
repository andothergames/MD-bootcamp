const username = "Cabbage Head";
console.log(`Good Morning ${username}!`);

let firstName = "Bob";
let interestRate = 1.4;
console.log(firstName);
firstName = "Cabbage";
console.log(firstName);
let age = 80;
age = 56;
console.log(age);

let numberOfStudents = 10;
let goalsScored;
console.log(`Goals scored today: ${goalsScored}`);
goalsScored = 4;
console.log(`Goals scored today: ${goalsScored}`);

let message = "This is a message";
console.log(message);
let anotherMessage = "This is another message";
console.log(anotherMessage);

let templateLiteral = `This is a template Literal`;
console.log(templateLiteral);

console.log(`you can add in variables ${goalsScored} with dollysquigs ${age}`);

console.log(username[0]);

const genericName = "John Doe";
console.log(genericName.length);

const browser = "Chrome";
console.log(browser.substring(0, 2));

//finding middle letters with string index notation
const word1 = "string";
const word2 = "code";
const word3 = "Practice";

console.log(`${word1[word1.length / 2 - 1]}${word1[word1.length / 2]}`);
console.log(`${word2[word2.length / 2 - 1]}${word2[word2.length / 2]}`);
console.log(`${word3[word3.length / 2 - 1]}${word3[word3.length / 2]}`);

function findMiddleLetter(word) {
  if (word.length % 2 === 0) {
    return `${word[word.length / 2 - 1]}${word[word.length / 2]}`;
  } else {
    return word[Math.floor(word.length / 2)];
  }
}

console.log(findMiddleLetter("string"), "should be ri");
console.log(findMiddleLetter("red"), "should be e");

// indexOf
const emailAddress = "johndoe@somewhere.com";
console.log(emailAddress.indexOf("@"));

console.log(message.indexOf("!"), "will yield -1 as message has no !");

//indexOfFirst
const sentence =
  "This is a long sentence where we can test if dog exists in it. Here is another dog";
const searchTerm = "dog";
const indexOfFirst = sentence.indexOf(searchTerm);
console.log(`The first instance of ${searchTerm} is at ${indexOfFirst}`);
console.log(
  `The second instance of ${searchTerm} is at ${sentence.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
);

//lastIndexOf

const fileName = "my-word-document.txt";
const indexOfPeriod = fileName.lastIndexOf(".");
console.log(fileName.substring(indexOfPeriod));

//chaining
console.log(fileName.substring(fileName.lastIndexOf(".")));

//replace
console.log(sentence.replace("dog", "cat"));

//with regex
const regex = /Dog/i;
console.log(sentence.replace(regex, "fox"));

//replace all
console.log(sentence.replaceAll("dog", "elephant"));

//slice
const str = "The quick brown fox jumps over teh lazy dog.";
console.log(str.slice(31));
console.log(str.slice(4, 19));
console.log(str.slice(-4));
console.log(str.slice(-9, -5));

//toUpperCase
console.log(username.toUpperCase());

//toLowerCase
console.log(username.toLowerCase());

//splitting
console.log(str.split(" "));
console.log(str.split(" ")[3]);
console.log(str.split("")[8]);

//numbers
console.log(Number.isInteger(99), "will be true");
console.log(Number.isInteger("a"), "will be false");

//NaN
console.log(isNaN(9), "will be false");
console.log(isNaN("a"), "will be true");

//parseInt
let numberOfItems = "10";
let numberOfItemsAsNumber = parseInt(numberOfItems);
console.log("Items as a number variable,", numberOfItemsAsNumber);

//parseFloat
let radius = 4.5;
let circumference = parseFloat(radius) * 2.0 * Math.PI;
console.log("circ as float", circumference);

//objects and arrays
const person = {
  name: "John",
  age: 35,
};
console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(typeof person.name);
console.log(person.age);
console.log(typeof person.age);

const now = new Date();
console.log(now);

const lotteryNumbers = [4, 8, 15, 16, 23, 42];
console.log(lotteryNumbers);
console.log(lotteryNumbers[3]);

const fruits = ["apple", "banana", "mango"];
console.log(fruits);

const mixedArray = ["cabbage", 12, true];
console.log(mixedArray);

const users = [
  ["Tobi", 18],
  ["Akin", 21],
  ["Dola", 20],
];
console.table(users);
console.log(users[2][1]);

const todos = [
  { id: 1, text: "Prepare something", isCompleted: true },
  { id: 2, text: "Pack something", isCompleted: false },
  { id: 3, text: "Cook something", isCompleted: false },
];
console.log(todos[0].text);

const animals = new Set();
animals.add("ant");
animals.add("moose");
animals.add("cat");
animals.add("dog");

console.log(animals);