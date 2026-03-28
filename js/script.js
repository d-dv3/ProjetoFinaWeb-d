"use strict";

//
//FORM
let prtForm = document.getElementById("portflForm");
let myNome = document.getElementById("newNamePlaceholder");
let myFrase = document.getElementById("novaFrasePlaceholder");
let newImgUrl = document.getElementById("fotoUrl"); //input
let userPhoto = document.getElementById("imgPrtf"); // img

prtForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let prfData = new FormData(this);

  myNome.innerText = prfData.get("name");
  myFrase.innerText = prfData.get("frase");
  userPhoto.setAttribute("src", prfData.get("addedUrlphoto"));

  this.reset();
});
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
    alert("tem a certeza que acabou o exercício?" + event.key);
  }
});
//
// RANDOM COLORS
function getRandomBKGcolor() {
  return Math.floor(Math.random() * 255);
}

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
// CHANGE IMG
let imageBtn = document.getElementById("changeImgBtn");
let imgHob = document.getElementById("changeImg");

imageBtn.addEventListener("click", () => {
  if (
    imgHob.getAttribute("src") == "img/markus-spiske-4PG6wLlVag4-unsplash.png"
  ) {
    imgHob.setAttribute("src", "img/austin-neill-hgO1wFPXl3I-unsplash.png");
  } else {
    imgHob.setAttribute("src", "img/markus-spiske-4PG6wLlVag4-unsplash.png");
  }
});
//
// ADD HOBBY
let addBtn = document.getElementById("addHob");
let hobList = document.getElementById("hobUl");

addBtn.addEventListener("click", () => {
  let outroHB = prompt("adiciona um hobby");
  console.log(outroHB);

  let newLi = document.createElement("li");
  newLi.innerText = outroHB;
  hobList.appendChild(newLi);
});
//
// SAVE LOCAL STORAGE
// on page load - restore saved data
// window.addEventListener("load", function () {
//   let saved = JSON.parse(localStorage.getItem("portfolioData"));
//   if (saved) {
//     myNome.innerText = saved.name || "diana";
//     myFrase.innerText = saved.frase || "programadora de low-code";
//     if (saved.photo) userPhoto.setAttribute("src", saved.photo);
//     // restore other fields...
//   }
// });

// on form submit - save to localStorage
// prtForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let prfData = new FormData(this);

//   let nome = prfData.get("name");
//   let frase = prfData.get("frase");
//   let photo = prfData.get("addedUrlphoto");

//   myNome.innerText = nome;
//   myFrase.innerText = frase;
//   userPhoto.setAttribute("src", photo);

//   // save to localStorage
//   localStorage.setItem(
//     "portfolioData",
//     JSON.stringify({
//       name: nome,
//       frase: frase,
//       photo: photo,
//     }),
//   );

//   this.reset();
// });

// reset button - clears everything
// let resetBtn = document.getElementById("resetBtn");
// resetBtn.addEventListener("click", function () {
//   localStorage.removeItem("portfolioData");
//   myNome.innerText = "diana";
//   myFrase.innerText = "programadora de low-code";
//   userPhoto.setAttribute(
//     "src",
//     "img/vitaliy-shevchenko-djoZc69XK6k-unsplash.jpg",
//   );
// });
