"use strict";
//
//
// BOOTSTRAP DARK MODE / LIGHT MODE
document.querySelectorAll(".btn").forEach((buttonElement) => {
  const button = bootstrap.Button.getOrCreateInstance(buttonElement);
  button.toggle();
});

(() => {
  const html = document.documentElement; // <html data-bs-theme="…">
  const btn = document.getElementById("themeToggle");
  const label = document.getElementById("themeLabel");
  const knobIcon = document.getElementById("knobIcon");

  // ── Restore saved preference (falls back to OS preference) ──
  const saved = localStorage.getItem("bs-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved ?? (prefersDark ? "dark" : "light");
  applyTheme(initial);

  // ── Toggle on click ──
  btn.addEventListener("click", () => {
    const next =
      html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("bs-theme", next);
  });

  function applyTheme(theme) {
    html.setAttribute("data-bs-theme", theme);

    if (theme === "dark") {
      knobIcon.className = "bi bi-moon-stars-fill";
      if (label) label.textContent = "Dark mode";
      btn.setAttribute("aria-pressed", "true");
    } else {
      knobIcon.className = "bi bi-sun-fill";
      if (label) label.textContent = "Light mode";
      btn.setAttribute("aria-pressed", "false");
    }
  }
})();
// .BOOTSTRAP DARK MODE / LIGHT MODE
//
// ADD TO SHOPPING LIST - NÃO ESTÁ ASSOCIADO A CLICK BOTAO
// ARRANJAR FORM + BOTAO
//
// let novaFraseForm = document.getElementById("fraseForm");
// let novaFraseLi = document.getElementById("novaFrase");

// novaFraseForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let fraseData = new FormData(this);
//   let frasePersonalizar = document.createElement("");
//   frasePersonalizar.innerText = fraseData.get("");

//   novaFraseLi.appendChild(frasePersonalizar);
//   this.reset();
// });
// EVENT
// MY SHOPPING LIST
// let groceryForm = document.getElementById("myShoppingList");
// let myUl = document.querySelector("ul");
//
// groceryForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let groceryData = new FormData(this);
//   let newLi = document.createElement("li");
//   //
//   newLi.innerText = groceryData.get("qt") + ":" + groceryData.get("product");

//   myUl.appendChild(newLi);

//   this.reset();
// });
//
//
// let myPortflForm = document.getElementById("portflForm");
// let newName = document.querySelector(".newNamePlaceholder");
// let newImg = document.getElementById("newImgUrlPlaceholder");
// let newFrase = document.querySelector(".novaFrasePlaceholder");

// myPortflForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   //
//   let newNameData = new FormData(this);
//   let newNameImg = new FormData(this);
//   let newNameFrase = new FormData(this);
//   //

//   // INNER TEXT ???
//   newNamePlace.textContent = newNameData.get("newNamePlaceholder");
//   //
//   newNameData.get("");
//   newName.textContent(newName);
//   //
//   this.reset();
// });
//
// ANIMAIS DO ZOO
// myForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   //traz um objecto com TODOS os inputs do formulário
//   let data = new FormData(this);

//   //acede ao input do formulário que tem no name newAnimal
//   let animal = data.get("newAnimal");

//   let newLi = document.createElement("li");
//   newLi.innerText = animal;

//   myList.appendChild(newLi);

//   this.reset();
// });

let addHobby = document.getElementById("addHobby");
let newLi = document.getElementById("hobList");

addHobby.addEventListener("click") {
    prompt=("adiciona um hobby");

    document.getElementById("hobList").textContent = userHobby; 
    console.log(userHobby); 


   
}
