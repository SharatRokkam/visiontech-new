// Order - 30 mins....

// javascript - Synchronous  - executes code line by line

// console.log("ordered Food") //1
// console.log("prepare food") // 2
// console.log("food delivered") //3

//Asynchornous javascript
// never blocks the javascript it simply completes the necessary or priority things first
// console.log("start"); // start

// setTimeout(() => {
//   console.log("1");
// }, 2000);

// console.log("end");
// console.log("end 2")

// Callbacks : are the function that can be passed as argument to another function

// function greet(name, callback){
//     console.log(`Hello ${name}`)
//     callback()
// }

// function goodbye(){
//     console.log("goodbye")
// }

// greet("Rahul", goodbye)

// callback hell - avoid using it.....

// function printVowels() {
//   setTimeout(() => {
//     console.log("A");
//     setTimeout(() => {
//       console.log("E");
//       setTimeout(() => {
//         console.log("I");
//         setTimeout(() => {
//           console.log("O");
//           setTimeout(() => {
//             console.log("U");
//           }, 2000);
//         }, 5000);
//       }, 4000);
//     }, 3000);
//   }, 5000);
// }

// printVowels();

//Most imp interview concepts
// Promise -A Promise is an object representing the ultimate completion or failure of an asynchronous operation. It acts as a cleaner alternative to callbacks and allows method chaining via '.then() and .catch()'.
// Pending: The initial state; the operation is still running.
// Fulfilled: The operation completed successfully, invoking .then().
// Rejected: The operation failed, invoking .catch()

// const promise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Operation successful");
//   } else {
//     reject("Operation failed");
//   }
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// callback < promise < async await
// Async Await : cleaner way to work with Promises

// API : Application programming interface

// Restuarant ->  user  -> Waiter <- Kitchen

// Website :- frontend -> API <- Backend

// Async Await, API, Fetch , Array of Objects, JSON(data).....
// Javascript Object Notation 

async function getUsers() {
  try {
    // important javascript method to fetch data from API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users[9].name);
    console.log(users[9].address.street);
    console.log(users[9].address.zipcode);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

getUsers();

console.log("Hello!");
