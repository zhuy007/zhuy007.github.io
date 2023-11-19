let body = document.querySelector(".intro");
let button = document.querySelector(".button");

function uncover() {
  body.classList.toggle("off");
  button.classList.toggle("text");
}

button.addEventListener("click", uncover);