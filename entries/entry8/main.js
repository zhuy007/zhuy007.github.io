
let body = document.querySelector(".rectangle");
let button = document.querySelector(".button");

function unblur() {
  body.classList.toggle("off");
  button.classList.toggle("text");
}

button.addEventListener("click", unblur);

let count = 0;
let countDisplay = document.getElementById("count");

button.addEventListener("click", function() {
count++;
countDisplay.innerHTML = count + " friends came";
});



