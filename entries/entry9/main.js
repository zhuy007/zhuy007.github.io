const srcs = ["imgs/1.1.png", "imgs/1.2.png", "imgs/1.3.png", "imgs/1.4.png", "imgs/1.5.png", "imgs/2.1.png", "imgs/2.2.png", "imgs/2.3.png", "imgs/2.4.png", "imgs/2.5.png", "imgs/3.1.png", "imgs/3.2.png", "imgs/3.3.png", "imgs/3.4.png", "imgs/3.5.png", "imgs/4.1.png", "imgs/4.2.png", "imgs/4.3.png", "imgs/4.4.png", "imgs/4.5.png", "imgs/5.1.png", "imgs/5.2.png", "imgs/5.3.png", "imgs/5.4.png", "imgs/5.5.png"];
document.onclick = userClicked;
function userClicked() {
    var x = event.clientX;
    var y = event.clientY;
    const img = document.createElement('img');
    img.classList.add('image');
    img.src = srcs[Math.floor(Math.random() * srcs.length)];
    img.onload = function(){
      img.style.left = x - img.width / 2 + 'px';
      img.style.top = y - img.height / 2 + 'px';
    }
    document.body.appendChild(img);
}