// window.addEventListener("load", function randomize(){
//     var r;
//     var list = document.getElementsByClassName("glow")
//     for(var i=0;i<5000;i++){
//         r = Math.floor(Math.random()*1);
//         list[i].style.margin = r + "px";
//     }
// });

// var timesRun = 0;
// var stopinterv = setInterval(function twinkling(){
// timesRun += 1;
// if(timesRun === 50){
// clearInterval(stopinterv);
// }
// for(let i = 0; i < 5; i++){
// var starCounts =document.createElement('i');
// starCounts.className = 'fa-solid fa-asterisk';
// var wh = Math.floor(Math.random(1,10)*15);
// var $x = Math.floor(Math.random(0,4)*100);
// var $y = Math.floor(Math.random(0,4)*100);

// starCounts.style.position = 'relative';
// starCounts.style.fontSize = wh + 'px';
// starCounts.style.left = $x + 'vw';
// starCounts.style.top = $y + 'vh';
// starCounts.style.color = 'white';
// document.querySelector('.glow').appendChild(starCounts);
// }
// }, 100)

var limit=100, // Max number of starts
body=document.body;
loop={
    //initilizeing
    start:function(){
        for (var i=0; i <= limit; i++) {
            var star=this.newStar();
            star.style.top=this.rand()*100+"%";
            star.style.left=this.rand()*100+"%";
            // star.style.webkitAnimationDelay=this.rand()+"s";
            // star.style.mozAnimationDelay=this.rand()+"s";
            body.appendChild(star);
        };
    },
    //to get random number
    rand:function(){
        return Math.random();
    },
    //createing html dom for star
    newStar:function(){
        var d = document.createElement('div');
        d.innerHTML = '<"glow">';
        return d.firstChild;
    },
};
loop.start();