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
