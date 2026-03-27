"use strict";
//
//
// BOOTSTRAP DARK MODE / LIGHT MODE
// document.querySelectorAll(".btn").forEach((buttonElement) => {
//   const button = bootstrap.Button.getOrCreateInstance(buttonElement);
//   button.toggle();
// });

// (() => {
//   const html = document.documentElement; // <html data-bs-theme="…">
//   const btn = document.getElementById("themeToggle");
//   const label = document.getElementById("themeLabel");
//   const knobIcon = document.getElementById("knobIcon");

//   // ── Restore saved preference (falls back to OS preference) ──
//   const saved = localStorage.getItem("bs-theme");
//   const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const initial = saved ?? (prefersDark ? "dark" : "light");
//   applyTheme(initial);

//   // ── Toggle on click ──
//   btn.addEventListener("click", () => {
//     const next =
//       html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
//     applyTheme(next);
//     localStorage.setItem("bs-theme", next);
//   });

//   function applyTheme(theme) {
//     html.setAttribute("data-bs-theme", theme);

//     if (theme === "dark") {
//       knobIcon.className = "bi bi-moon-stars-fill";
//       if (label) label.textContent = "Dark mode";
//       btn.setAttribute("aria-pressed", "true");
//     } else {
//       knobIcon.className = "bi bi-sun-fill";
//       if (label) label.textContent = "Light mode";
//       btn.setAttribute("aria-pressed", "false");
//     }
//   }
// })();
// .BOOTSTRAP DARK MODE / LIGHT MODE
//
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
