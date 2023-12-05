// let paths = document.querySelectorAll('path');

// fillSvgPaths()

// document.addEventListener('scroll', fillSvgPaths)

// function fillSvgPaths() {

//   let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//     for (var i = 0; i < paths.length; i++) {
//       let path = paths[i];

//       let pathLength = path.getTotalLength();

//       path.style.strokeDasharray = pathLength;
//       path.style.strokeDashoffset = pathLength;

//       let drawLength = pathLength * scrollPercentage;

//       path.style.strokeDashoffset = pathLength - drawLength;
//       }
// }


let srcs = ["imgs/img1.png", "imgs/img2.png", "imgs/img3.png", "imgs/img4.png"];
document.onclick = userClicked;
function userClicked() {
    let x = event.clientX;
    let y = event.clientY;
    let img = document.createElement('img');
    img.classList.add('image');
    img.src = srcs[Math.floor(Math.random() * srcs.length)];
    img.width = '150';
    img.height = '150';
    img.onload = function(){
      img.style.left = x - img.width / 2 + 'px';
      img.style.top = y - img.height / 2 + 'px';
    }
    document.body.appendChild(img);
}