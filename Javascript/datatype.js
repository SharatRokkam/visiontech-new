// Data can be identified,  we need to categorize 

// Datatype 
// 1. Primitive and 2. Non Primitive 
// 1. Number, String, boolean, null, undefined, bigInt, Symbol
// 2. Arrays and Objects, Function


// let and const - when you create a variable that can change in future you should use let and const can be used if the variable will be constant


// in every browser there is javascript engine (google V8 engine) to run the js code 

//Numbers : =============================
let score = 10; //integer
const average = 98.3; //float

score = 30;
// average = 55.5; const variable value cannot be changed
// console.log(average)
// console.log("score is updated",score)

// String : is sequence of character enclosed in double or single qoutes...


// let myFavouriteHero = "Mahesh Babu";

// console.log(myFavouriteHero)

// Methods in String ----------------------------------------------

// let visiontech = " FSD Batch "


// console.log(visiontech.length)
visiontech = "      John Doe    "
// visiontech[5] = "D" //imutable

// console.log(visiontech) // index value - 0
// console.log(visiontech.toUpperCase());
// console.log(visiontech.toLowerCase());

// console.log(visiontech.replace("Batch 4", "Batch 50"))

// console.log(visiontech.startsWith('Z'))  //false 
// console.log(visiontech.endsWith('4')) //false

console.log(visiontech)
console.log(visiontech.trim())

// const message = "JavaScript is fun";
//                 012345678910123456      









// Boolean - True or False

// let isStudent = true;
// let idAvailable = false;

// console.log(isStudent)


// Imp = Null vs Undefined vs Not defined 


// let attendance = null; // intentional assigning the value to null if value not present

let attendance = null; 

// let flower; //declared a variable not assigned any value...
// console.log(flower)  // undefined



// console.log(myBike) // accessing first

// let myBike = "Honda Rebel"; // declaring variable later

// const id1 = Symbol("Hello"); //different memory
// const id2 = Symbol("Hello"); //different memory

// console.log(id1 == id2)


// Non Primitive 