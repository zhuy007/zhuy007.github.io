// let words = ["In the middle of the park, the man sits alone on a swirly bench.", "Surrounded by the chaos on a Thursday afternoon, he showed minimal movements and interest.",
// "It was busy that day.", "Bands performing,", "skaters skating,", "people walking around with cameras on the shoulders.", "Distinct chatters overlapped in each and every corner.", "He had been sitting there for quite a while, unbothered by the rapidly-moving world around.", "The calmness seemed detached, as if here was an invisible bubble that surrounded him.", "I was trying to sit in peace that day, enjoying the sun with my smoothie in hand.", "Perhaps just like him.", "But my little “peace bubble” only lasted a short while before a giant bee started chasing me around.", "His bubble lasted.", "Perhaps it was the calmness or it could have been the stillness, pigeons started to surround him.", "At one point, he was completely covered by them, they tried to break the stillness and disturb the peace, but still, there was no signs of movement.", "His bubble lasted."];

// document.onclick = userClicked;

// function userClicked(event) {
//     let x = event.clientX;
//     let y = event.clientY;

//     let word = document.createElement('div');
//     word.classList.add('word');
//     word.textContent = words[Math.floor(Math.random() * words.length)];

//     word.style.position = 'absolute'; // Set the position style
//     word.style.left = (x - 30) + 'px'; // Adjust for word width
//     word.style.top = (y - 10) + 'px'; // Adjust for word height

//     document.body.appendChild(word);
// }
let words = ["In the middle of the park, the man sits alone on a swirly bench.", "Surrounded by the chaos on a Thursday afternoon, he showed minimal movements and interest.",
"It was busy that day.", "Bands performing,", "skaters skating,", "people walking around with cameras on the shoulders.", "Distinct chatters overlapped in each and every corner.", "He had been sitting there for quite a while, unbothered by the rapidly-moving world around.", "The calmness seemed detached, as if here was an invisible bubble that surrounded him.", "I was trying to sit in peace that day, enjoying the sun with my smoothie in hand.", "Perhaps just like him.", "But my little “peace bubble” only lasted a short while before a giant bee started chasing me around.", "His bubble lasted.", "Perhaps it was the calmness or it could have been the stillness, pigeons started to surround him.", "At one point, he was completely covered by them, they tried to break the stillness and disturb the peace, but still, there was no signs of movement.", "His bubble lasted."];

let currentIndex = 0;

document.onclick = userClicked;

function userClicked(event) {
    let x = event.clientX;
    let y = event.clientY;

    if (currentIndex >= words.length) {
        currentIndex = 0;
    }

    let word = document.createElement('div');
    word.classList.add('word');
    word.textContent = words[currentIndex];

    word.style.position = 'absolute'; 
    word.style.left = (x - 30) + 'px'; 
    word.style.top = (y - 10) + 'px'; 

    document.body.appendChild(word);

    currentIndex++; 
}

