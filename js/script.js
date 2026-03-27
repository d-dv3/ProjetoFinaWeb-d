"use strict";

//
//FORM
// let prtForm = document.getElementById("portflForm");
// let myNome = document.getElementById("newNamePlaceholder");
// let myFrase = document.getElementById("novaFrasePlaceholder");
// let newImgUrl = document.getElementById("trocarImg");

// prtForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let prfData = new FormData(this);

//   myNome.innerText = prfData.get("name");
//   myFrase.innerText = prfData.get("frase");
//   newImgUrl.setAttribute("src", prfData.get("foto"));

//   this.reset();
// });
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
