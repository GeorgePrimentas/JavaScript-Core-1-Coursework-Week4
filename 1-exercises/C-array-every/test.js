// // // Find the value of the first element with a value over 18:
// let myArray = [3, 12, 9, 45, 21]

// // This is the test
// function greaterThan18(number) {
//     return number > 18;
// }
// // End of test

// let myGreaterThan18Number = myArray.find(greaterThan18)
// console.log(myGreaterThan18Number);



// Experimenting with Functions

// Function with no Parameters

// function myFunction1() {
//     let array = ["England", "Wales", "Scotland"]
//     console.table(array)
// }


// myFunction1() //Calling the Function
// console.log("End") // So return seems not to be obligatory
// console.log(myFunction1);

// Function with parameter
// let repetition5x = x => x+x+x+x+x
// console.log(repetition5x("story"));

// ---------------------------------------

/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

// let names = [
//   "Rakesh",
//   "Antonio",
//   "Alexandra",
//   "Andronicus",
//   "Annam",
//   "Mikey",
//   "Anastasia",
//   "Karim",
//   "Ahmed",
// ];


// let isLongName = name => name.length > 7 && name[0] === "A";

// let longNameThatStartsWithA = findLongNameThatStartsWithA(names);



// function findLongNameThatStartsWithA(names) {
//   let longName = names.find(isLongName);
// return longName;
// }


// console.log(longNameThatStartsWithA);


//--------------------------------------------------
//B-array-some


//--------------------------------------------------
//C-array-every

