/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/

let pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];

//This 'solution' looks like it's working though I haven't use the some() method
pairsByIndex.forEach(value => {
if (value === null) {
  console.log("exit");
  process.exit(1);
}
});

// // Why does the following not work?
// // .forEach() returns undefined
// if (pairsByIndex.forEach(value => value === null)) { // This doesn't look like even to be a condition
//   console.log("exit");
//   process.exit(1);
// };
// // OK! It's because the pairsByIndex.forEach(value => value === null) not being a condition evaluates to true
// // And it is a condition!


if (pairsByIndex.some(value => value === null)) {
  process.exit(1);
}

// If there is a null value in the array exit the program with the error code
// https://nodejs.org/api/process.html#process_process_exit_code
// process.exit(1);

let students = ["Islam", "Lesley", "Harun", "Rukmini"];
let mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

let pairs = pairsByIndex.map(function (indexes) {
  let student = students[indexes[0]];
  let mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);

