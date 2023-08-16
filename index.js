const cat = document.getElementById("cat");

//
// cat.style.background = "pink";
cat.innerHTML = "<ul> <li> hi </li> </ul>";

// background-color : red;
cat.style.backgroundColor = "red";

cat.style.border = "2px green solid";
// font-size: 50px
cat.style.fontSize = "50px";
// margin-top
cat.style.marginTop = "30px";

// padding-bottom
cat.style.paddingBottom = "30px";

cat.style.margin = "2em 0 1em .5em";

const mice = document.getElementsByClassName("mouse");

// for (let i = 0; i < mice.length; i++) {
//   mice[i].innerHTML = "Mouse";
// }

[...mice].forEach((element) => {
  element.innerHTML = "Any value";
});

// let divs = document.getElementsByTagName("div");
// console.log("divs are :", divs);

let firstDiv = document.querySelector("div");

// console.log(firstMouse); // <== <div class="mouse"></div>
// console.log(firstDiv);

let allDivs = document.querySelectorAll(".mouse, #cat");

// allDivs.forEach((element) => {
//   element.innerHTML = "Query Selector All is used";
// });

let firstMouse = document.querySelector(".mouse");
firstMouse.style.background = "yellow";
console.log(firstMouse.className);
console.log(firstMouse.id);
