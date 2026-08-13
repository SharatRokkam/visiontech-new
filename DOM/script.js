// Crucial topic - DOM  - Dynamic Web application

// 5 ways to access/target the element
// 1. getElementById
// 2. getElementsbyClassName
// 3. getElementsbyTagname
// 4. querySelector - important
// 5. querySelectorAll - important

let heading = document.getElementById("heading");
console.log(heading);

// change the text in 3 ways
// heading.innerText = "Good Evening!"
// heading.innerHTML = "Good Evening! folks"
heading.textContent = "wrapping in 5 mins"
heading.style.color = "red";
heading.style.backgroundColor = "yellow"
heading.style.border = "3px solid black"
heading.style.padding = "20px"




// document-> element
// style -> color, padding, background 


// difference ? when should i use?

// console.log(heading.innerHTML); // content and html tag
// console.log(heading.innerText); // only the visible part of the screen
// console.log(heading.textContent); //all the content will be visible even if the element is invisible on the screen...


// DOM - tomorrow 
// saturday - 7 PM (events)

// document.getElementsByClassName
// document.getElementsByTagName - Home work....