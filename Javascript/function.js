// function expresssion

// const addition = function(a, b){
//     console.log(a + b)
// }

// addition(4, 5)

// arrow function - using in modern development (concise way of creating function)

// const addition = (a, b) => console.log(a + b)

// addition(44, 44)

// price of product, quantity
// 340 * 3 = ?

// declaration, expression, arrow function

// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// };

// let total = calculateTotal(340, 4);

// console.log(`Total amount is ${total}`);

// function scope : variables created inside the function are
// generally  accessible only inside that function

// let message = "Hello"; //global variable

// function test() {
//   console.log(message); // can be accessed inside the function
// }
// test();
// console.log(message); // outside as well

// Nested function

// function outer(){
//     const inner = () =>{
//         console.log("inside the inner")
//     }

//     inner()
// }

// outer()

// Callback function - function passed to another function is commonly
//  called as callback function as an argument

// function greet(name, callback) {
//   console.log("Hello", name);
//   callback();
// }

// function message() {
//   console.log("Welcome!");
// }

// greet("Rahul", message);

// setTimeout and setInterval these are webapis not a part of js

//executes only once
// setTimeout(() => {
//   console.log("Hello");
// }, 5000);

// executes continuously after a specified time
setInterval(() => {
  //   console.log("World");
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log(`${hours} : ${minutes} : ${seconds}`);
}, 1000);


// Date in detail - Home work ........