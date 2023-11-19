let body = document.body;
let button = document.querySelector(".button");

function stopAlarm() {
  body.classList.toggle("off");
  button.classList.toggle("buttonOn");
}

button.addEventListener("click", stopAlarm);

let count = 0;
// let button = document.querySelector(".button");
// let countDisplay = document.getElementById("count");

button.addEventListener("click", function() {
count++;
countDisplay.innerHTML = count + " witnessed";
});