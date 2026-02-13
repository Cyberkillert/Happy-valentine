let startBtn = document.getElementById("startBtn");
let countdownEl = document.getElementById("countdown");
let valentineEl = document.getElementById("valentine");
let music = document.getElementById("music");

startBtn.addEventListener("click", function(){

    startBtn.style.display = "none";
    countdownEl.style.display = "block";

    let count = 3;

    let timer = setInterval(function(){
        count--;

        if(count > 0){
            countdownEl.innerText = count;
        }else{
            clearInterval(timer);

            countdownEl.style.display = "none";
            valentineEl.style.display = "block";

            music.play(); // now it works because user clicked

            createHearts();
        }

    },1000);
});

function createHearts(){
    setInterval(function(){
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️🖕";
        heart.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    },300);
}
