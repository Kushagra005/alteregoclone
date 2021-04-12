const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const nav = document.getElementById("navmenu");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("navexp");
});

close.addEventListener("click", () => {
  nav.classList.toggle("navexp");
});
