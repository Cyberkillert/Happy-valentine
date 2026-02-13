let count = 3;
let countdownEl = document.getElementById("countdown");
let valentineEl = document.getElementById("valentine");
let music = document.getElementById("music");

let timer = setInterval(function(){
    count--;

    if(count > 0){
        countdownEl.innerText = count;
    }else{
        clearInterval(timer);

        countdownEl.style.display = "none";
        valentineEl.style.display = "block";

        // Play sound from root directory
        music.play().catch(error => {
            console.log("Autoplay blocked. User interaction required.");
        });

        createHearts();
    }

},1000);

function createHearts(){
    setInterval(function(){
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random()*30) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        },5000);

    },300);
}