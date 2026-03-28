"use strict";

//
//FORM
let prtForm = document.getElementById("portflForm");
let myNome = document.getElementById("newNamePlaceholder");
let myFrase = document.getElementById("novaFrasePlaceholder");
let newImgUrl = document.getElementById("trocarImg");

prtForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let prfData = new FormData(this);

  myNome.innerText = prfData.get("name");
  myFrase.innerText = prfData.get("frase");
  newImgUrl.setAttribute("src", prfData.get("foto"));

  this.reset();
});
//
// img to form:
// find images https// ...  .jpg
//
//
//

//
// API
let askJokeBtn = document.getElementById("getJoke");
let jokeList = document.getElementById("jokeList");

askJokeBtn.addEventListener("click", function () {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let li = document.createElement("li");
      li.innerText = data.setup + " ... " + data.punchline;

      jokeList.appendChild(li);
    });
});
//
//ENTER EVENT
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key == "Enter") {
    alert("evento de teclado!" + event.key);
  }
});
//
//
// RANDOM COLORS
function getRandomBKGcolor() {
  return Math.floor(Math.random() * 255);
}
//
let randomColorBtn = document.getElementById("corAbtn");
let colorsSpot = document.getElementById("allColors");

randomColorBtn.addEventListener("click", () => {
  let r = getRandomBKGcolor();
  let g = getRandomBKGcolor();
  let b = getRandomBKGcolor();
  console.log(r);
  console.log(g);
  console.log(b);

  let rColor = `rgb( ${r}, ${g}, ${b} )`;
  console.log(`rgb( ${r}, ${g}, ${b} )`);
  console.log(rColor);

  colorsSpot.style.backgroundColor = rColor;
});
//
//
// CHANGE IMG

// image.style.width = '150px';
// image.style.borderRadius = '50%';

// imageBtn.addEventListener("click", () => {

// let imageBtn = document.getElementById("changeImgBtn");
// let imgHob = document.getElementById("changeImg");

//     if(imgHob.getAttribute("src") ==
//         "img/markus-spiske-4PG6wLlVag4-unsplash.png") {

//             imgHob.getAttribute("src") == "imag/austin-neill-hgO1wFPXl31-unsplash.jpg";

//     }
//         else if {
//             imgHob.getAttribute("src") == "imag/
//         }
//         else {
//           imgHob.getAttribute("src") == "imag/
//         }
// });
//
//

//
// ADD HOBBY
let addBtn = document.getElementById("changeImgBtn");
let hobList = document.getElementById("hobUl");

addBtn.addEventListener("click", () => {
  let outroHB = prompt("adiciona um hobby");
  console.log(outroHB);

  let newLi = document.createElement("li");
  newLi.innerText = outroHB;
  hobList.appendChild(newLi);
});
