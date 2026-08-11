// Almost everything in javascript is an object
// Object - stores data in key value pairs.

const student1 = {
  // key : value
  name: "Akshitha",
  age: 33,
  course: "javascript",
  isStudent: true,
  languages: ["English", "Telugu", "Hindi"],
  identity: {
    hasAadhar: true,
    hasPancard: false,
  },
};

// Access Properties
// 1. Dot Notation

// console.log(student1.name);
// console.log(student1.identity);

// 2. Bracket Notation
// console.log(student1["age"]);
// console.log(student1["languages"]);

// add a new property
// student1.city = "Hyderabad"

// console.log(student1)

// update the property
// student1.age = 23;
// console.log(student1)

// delete the propety
// delete student1.age;

// console.log(student1);

// Object.keys - returns all the property names

// console.log(Object.keys(student1));
// console.log(Object.values(student1));

// Object.entries - returns key-value pairs

// console.log(Object.entries(student1));

// Spread Operator (...)
// const updatedStudent1 = {
//   ...student1,
//   movies: ["Spiderman"],
// };

// console.log(updatedStudent1);

// Object.freeze(student1)

// student1.city = "Nizamabad" //will not applied
// student1.age = 22 //will not applied
// console.log(student1)

// console.log(student1.hasOwnProperty("age"));
// console.log(student1.hasOwnProperty("city"));

// function --- a block of code to perfom a task....

// fridge - refrigation
// washing machine - specific function

// function functionName(parameters){
//     //code
// }

// functionName(arguments)  // calling is very important


// function declaration
// function addition(a, b) {
//   console.log(a + b);
// }

// addition(10, 20) 
// addition(1, 20)
// addition(22, 20)
// addition(220, 20)
// addition(122, 20)



