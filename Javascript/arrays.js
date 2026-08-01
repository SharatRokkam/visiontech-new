// Data types --1. primitive datatype 2. non-primitive data type

// Array ?
// Array is used to store collection of multiple data types, []
// 1D and 2D array

// let students = [1, "Prasanna", true, null, undefined];
// index value -> always starts with zero
// 1 - 0, "prasanna" - 1, true - 2, null - 3, undefined - 4

// let students = [] //empty array

// students[0] = "Akshitha";
// students[1] = "Prasanna"
// students[2] = "Venkatesh"

// console.log(students)

// Methods in Array JS

// let randomArray = [45, "Nalini", true, false, null, 55.5];
// push = adds an element to the end of the array

// randomArray.push("Sharath");
// console.log(randomArray);

//pop - removes the last element

// randomArray.pop()
// console.log(randomArray);

// let randomArray = [45, "Nalini", true, false, null, 55.5];

// unshift - add the element in the beginning of the array
// randomArray.unshift("Aman");
// randomArray.unshift(100);
// console.log(randomArray)

//shift - remove the first element

// randomArray.shift();
// console.log(randomArray)

// length
// console.log(randomArray.length)

// console.log(randomArray[4])

// includes - check the element exists or not - return boolena value

// let num = randomArray.includes(100)
// let name = randomArray.includes("nalini")

// case sensitive  - Nalini and nalini are different

// console.log(num);
// console.log(name);

// slice - returns the portion of an array without changing the original array

// let numbers = [10, 20, 30, 40, 50, 60]

// console.log(numbers.slice(1, 4));

// splice  - Home work  slice vs splice - Interview Question

// let numbers = [10, 20, 30, 40, 50, 60]

// numbers.reverse();  //reverse a string or array without methods..
// console.log(numbers)

// Map, filter, reduce - (very important)

// Map - create a new array by transforming each element

// let marks = [20, 40, 60];

// // let updateMarks = marks.map(mark => mark + 5);
// let updateMarks = marks.map(mark => mark / 2);

// console.log(marks)
// console.log(updateMarks);

// Filter - returns elements that satisfy a condition

// let marks = [20, 40, 60, 80, 44, 34, 55];
// // 60, 80, 55

// let passed = marks.filter((mark) => mark >= 50);
// console.log(passed);

// Reduce : reduce the array to a single value

let cart = [100, 120, 200, 45, 2, 98, 99]; // DMART

let total = cart.reduce((sum, price) => sum + price, 0);

console.log(total);

// sum + price => 0 + 100 => 100
// sum + price => 100 + 120 => 220
// sum + price  => 220 + 200 => 420
// sum + price => 420 + 45 => 475
// sum + price => 475 + 2 => 477
// sum + price => 477 + 98 => 575
// sum + price => 575 + 99 => 664


// Home Work : splice , some , every, join, concat, findIndex, lastIndexOf, find