//used when you know many times the loop should run
// for (let student = 26; student >= 1; student--){
//     // template literal
//     console.log(`Attendance marked for Student ${student}`)
// }

// while loop - used when the number of iterations is not known beforehand..
// while(condition){
//     //code
// }

// let balance = 10000;

// while(balance > 0){
//     console.log(`Withdraw rs1000 remaining balance: ${balance}`);
//     // balance = balance - 1000;
//     balance -= 1000;
// }

// do while loop - runs at least once even if the condition is false

// let attempts = 1;

// do {
//   console.log("Checking password....");
//   attempts++; //1++
// } while (attempts <= 1);



// loops in anyother programming language - for of, for in , for each


// for of loop - used to iterate through arrays, string or iterable object 


// array is denoted by square brackets 
// const students = ["Naveen", "Venkatesh", "Prasanna", "Reshma"];

// real world 

//std - temporary variable it will die or destroyed after the loop ends
// for (let std of students){
//     console.log(`Students enrolled in FSD are ${std}`)
// }


// const orders = ["Laptop", "Mobile", "Charger", "headphones", "Keyboard"];

// for(let order of orders){
//     console.log(`Received ${order}`);
// }


// for of - string 

let language = "javascript"

for (let word of language){
    console.log(word)
}



// for in loop - iterate through the objects properties

// object has keys and value pair - denoted by curly braces
// Important Note : Almost everything in Javascript is an object only......

// let student = {
//     // key : value 
//     name: "Shravani",
//     age : 23,
//     course : "FSD",
//     currentlyLearning : "Javascript"
// }

// for (let key in student){
//     console.log(`${key} : ${student[key]}`)
// }



// let product = {
//     name : "Lenovo thinkpad",
//     brand : "lenovo",
//     price : 64000,
//     stock : 20
// }

// for (let key in product){
//     console.log(`${key} : ${product[key]}`);
    
// }