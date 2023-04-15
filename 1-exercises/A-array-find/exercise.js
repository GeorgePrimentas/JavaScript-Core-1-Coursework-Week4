/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

let names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

// //--- First (1st) 'solution'
// function isLongName(name) {
//   return name.length > 7
// }

// function findLongNameThatStartsWithA(names) {
//   let longName = names.find(isLongName);
//   if (longName[0] === "A") {
//     return longName
//   }
// }

// console.log(findLongNameThatStartsWithA(names));

//--- END of first (1st 'solution')

// This 'solution' returns the anticipated results. However, what if the first name (which starts with an 'R') was longer than 7 characters?
  // Well, the result would be undefined. Perhaps try to find two conditions simultaneously?
  // Note on 19 Feb 2023: The above is not a good solution; it's not even a solution
  // It only accidentally works. It only searches (i.e. findS) the first element of the
  // array that is longer than 7 characters. Incomplete.

// This is the test (Is the name's length greater than 7 characters and at the same time does is start with a capital A?)
// function isLongName(name) {
//   return name.length > 7 && name[0] === "A";
// }
// console.log(isLongName("AGeorgios"));
// End of the test

// Because the function is a 'one liner' we could use the arrow function expression like
let isLongName = name => name.length > 7 && name[0] === "A";

function findLongNameThatStartsWithA(names) {
  let longName = names.find(isLongName);
return longName;
}

console.log(findLongNameThatStartsWithA(names));

//   // A way to do this without the .find method
//   function findLongNameThatStartsWithA(names) {
//   for (let name of names) {
//     if (((name.length > 7) && (name[0] === "A")) === true) {
//       return name
//     }
//   }
// }

// console.log(findLongNameThatStartsWithA(names));
//   // As return stops the execution of the function, when it finds the first name that fulfills
//   // the above criteria (conditions) the function will stop and we get with the next line
//   // the result on the console


/* EXPECTED OUTPUT */
// "Alexandra"
