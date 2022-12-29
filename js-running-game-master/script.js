const hero = document.querySelector(".hero");
const heroBoy = document.querySelector(".hero-boy");
const villain = document.querySelector(".villain");
var audio1 = new Audio('run.mp3');
audio1.play();

function jump() {
    if (hero.classList != "animate") {
        hero.classList.add("animate");
        villain.style.animation = "move 1s infinite linear";
    }

    setTimeout(function() {
        hero.classList.remove("animate");
    }, 300);
}

document.addEventListener("keydown", function() {
    jump();
})

let isAlive = setInterval(function() {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    //   console.log(heroTop);
    let villainLeft = parseInt(window.getComputedStyle(villain).getPropertyValue("left"));

    if (villainLeft < 40 && villainLeft > 20 && heroTop >= 130) {
        villain.style.animation = "none";

        alert("Game Over. Press spacebar to restart");
    }


}, 10);
