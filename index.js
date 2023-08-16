const paragraph = document.querySelector("#paragraph");
// const paragraph = document.getElementById("paragraph");
// console.log(paragraph);

const link = document.querySelector(".link");
link.setAttribute("href", "http://www.google.com");
link.setAttribute("target", "_blank");
// const links = document.querySelectorAll(".class1, .class2, #withId")
// console.log(link);
// console.log(paragraph.id);

// console.log(paragraph.id);
paragraph.setAttribute("id", "info-paragraph");
paragraph.removeAttribute("id");
paragraph.setAttribute("class", "paragraph");

// console.log(paragraph.getAttribute("id"));
// console.log(paragraph.id);

// create HTML element
let parent = document.getElementsByTagName("body")[0];
// console.log(parent);
const h2Tag = document.createElement("h2");
h2Tag.innerHTML = "H2 tag created with pure JS";
let text = document.createTextNode("<h2>Hello there</h2>");

let h1Tag = document.createElement("h1");
h1Tag.innerHTML = "Heading 1 - comes before Heading 2";

// console.log(h1Tag);

parent.appendChild(h2Tag);
parent.appendChild(text);
parent.insertBefore(h1Tag, h2Tag);

// console.log(parent.childNodes);
// console.log(parent.childNodes[parent.childNodes.length - 1]);

let button = document.getElementById("add-item-button");
// console.log(button);
button.onclick = function () {
  console.log("clicked");
};

const input = document.getElementById("input");
// input.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

let input2 = document.getElementsByTagName("input")[0];
let sendButton = document.getElementById("send-btn");

// without adding an event listener
sendButton.onclick = function () {
  console.log(input2);
  console.log(input2.value);
};

// with an event listener
// sendButton.addEventListener("click", () => {
//   console.log(input2.value);
// });

let liTags = document.getElementsByTagName("li");
console.log(liTags);
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onclick = function (event) {
    console.log(event.currentTarget.innerHTML);
  };
}
