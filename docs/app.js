const redButton = document.querySelector("#redBtn");
const blueButton = document.querySelector("#blueBtn");
const greenButton = document.querySelector("#greenBtn");
const yellowButton = document.querySelector("#yellowBtn");
const startButton = document.querySelector("#startBtn");

redButton.addEventListener('click', (event) => {
        redButton.style.backgroundColor = "tomato";
            setTimeout(() => {
                clearColor();
            }, 300)
})

blueButton.addEventListener('click', (event) => {
    blueButton.style.backgroundColor = "lightblue";
    setTimeout(() => {
        clearColor();
    }, 300)
})

greenButton.addEventListener('click', (event) => {
    greenButton.style.backgroundColor = "lightgreen";
    setTimeout(() => {
        clearColor();
    }, 300)
})

yellowButton.addEventListener('click', (event) => {
    yellowButton.style.backgroundColor = "yellow";
    setTimeout(() => {
        clearColor();
    }, 300)
})

function clearColor() {
    redButton.style.backgroundColor = "darkred";
    blueButton.style.backgroundColor = "darkblue";
    greenButton.style.backgroundColor = "darkgreen";
    yellowButton.style.backgroundColor = "goldenrod";
}