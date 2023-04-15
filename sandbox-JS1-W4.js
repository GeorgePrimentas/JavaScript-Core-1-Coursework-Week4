// 07 Jan 2023 - 20.47pm-21.08pm (Slides 1-10)
// Slide 1 - JavaScript Core 1 - Week 4
// Slide 2 - 
// Slide 3 - Passing functions as arguments
//           More array methods
//           Terminal tic-tac-toe hack-a-thon!
// Slide 4 - Title slide
// Slide 5 - Title slide
// Slide 6

function double(n) {
    return n * 2;
}

console.log(double(3));
console.log(double(5));

// Slide 7
 function doubleEachElement(arr) {
    let newArr = [];
    for (let element of arr) {
        let newValue = double(element);
        newArr.push(newValue);
    }
    return newArr;
 }

let array = [1, 3, 5, 7, 9, 11, 13]
console.table(doubleEachElement(array));

// Slide 8
function tripleEachElement(arr) {
    let newArr = [];
    for (let element of arr) {
        let newValue = triple(element);
        newArr.push(newValue);
    }
    return newArr;
}

// Slide 9
function update(arr, func) {
    let newArr = [];
    for (let element of arr) {
        let newValue = func(element);
        newArr.push(newValue);
    }
    return newArr;
}

// Slide 10
let arr = [1, 2, 3];
console.log(update(arr, double));

// My insert
function triple(n) {
    return n * 3;
}
// End of my insert
console.log(update(arr, triple));