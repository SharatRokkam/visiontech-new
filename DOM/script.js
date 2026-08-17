// Crucial topic - DOM  - Dynamic Web application

// 5 ways to access/target the element
// 1. getElementById
// 2. getElementsbyClassName
// 3. getElementsbyTagname
// 4. querySelector - important
// 5. querySelectorAll - important

// let heading = document.getElementById("heading");
// console.log(heading);

// change the text in 3 ways
// heading.innerText = "Good Evening!"
// heading.innerHTML = "Good Evening! folks"
// heading.textContent = "wrapping in 5 mins"
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow"
// heading.style.border = "3px solid black"
// heading.style.padding = "20px"

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

// ---------------------------------------------------------------

// const messages = document.getElementsByClassName("message");
// console.log(messages);

// HTMLCollection - it looks an array but it is not an array

//specific
// messages[0].textContent = "Hi! Everybody"
// messages[2].style.color = "red"

// -----------------------------------------------------------------
// querySelector selects the first element only, but querySelectorAll selects all the available elements

// const message = document.querySelector(".message");
// console.log(message);
// const message = document.querySelectorAll(".message");
// console.log(message);

// message.forEach(function(mess){
//     console.log(mess.textContent)
// })

// how to add class and remove a class
// const message = document.querySelector(".message");

// message.classList.add("active")
// message.classList.remove("message")
// console.log(message);

// ---------------------------------------------
// how to change attribute
// const image = document.querySelector("img")
// image.src = "https://media.licdn.com/dms/image/v2/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=zrcrB8lfoVmZo0LcSLgut3A_4PwE6YFe9EK3iy17L2Y"

// setAttribute
// image.setAttribute("src", "https://media.licdn.com/dms/image/v2/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=zrcrB8lfoVmZo0LcSLgut3A_4PwE6YFe9EK3iy17L2Y")

// const message = document.querySelector(".message")

// message.setAttribute("class", "active")
// console.log(message)

// message.getAttribute("class")

// ------------------------------------------------------------
// Events : DOM becomes extremely powerful when we combine it with events.

// An Event means something happens on the webpage
// Example : CLICK, MOUSE MOVEMENT, KEYBOARD PRESS, FORM SUBMISSION,
// PAGE LOADING

// addEventListener - event and function
const button = document.querySelector("#btn");

const body = document.querySelector("body");

button.addEventListener("click", function () {
  //   console.log("button clicked");
  const heading = document.createElement("h1");
  const paragraph = document.createElement("p");
  
  heading.textContent = "Hi! Welcome Everybody⭐❤️";
  paragraph.textContent = "Some Random text";
  console.log(paragraph)
//   console.log(h1);

  //adopting a element
  document.body.appendChild(heading);
  document.body.appendChild(paragraph)
});
