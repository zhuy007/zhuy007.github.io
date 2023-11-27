
//   let blobs = document.querySelectorAll(".blob");
//   let container = document.querySelector(".wrapper");
 
// container.addEventListener("click", blobDrop);

// function blobDrop () {
// 	let newBlob = document.createElement("div");
// 	newBlob.classList.add("blob");
// 	container.appendChild(newBlob);
// 	newBlob.style.right = event.clientX + "px";
// 	newBlob.style.top = event.clientY + "px";
// 	console.log(event, event.clientX);
// }

//  





let button = document.querySelector(".button");
// let colors = ["#255c34", "#726756", "#703a56", "#953e00"];
let bgImgs = ["imgs/number1.jpeg", "imgs/number3.jpeg"];
let body = document.querySelector("body");

function newBg() {
  let randIndex = Math.floor(Math.random() * bgImgs.length);
  let randBg = bgImgs[randIndex];
  body.style.backgroundImage = "url(\"" + randBg + "\")";
  console.log(randBg);
}

body.addEventListener("click", newBg);