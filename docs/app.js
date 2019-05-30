let sequence = [];
let playerSequence = []
let command;
let playerTurn;
let state;
let compTurn;
let sequenceId;
let win
let on = false;

const redButton = document.querySelector("#redBtn");
const blueButton = document.querySelector("#blueBtn");
const greenButton = document.querySelector("#greenBtn");
const yellowButton = document.querySelector("#yellowBtn");
const startButton = document.querySelector("#startBtn");

startButton.addEventListener('click', (event) => {
    clearInterval(sequenceId);
    on = true;
    play();
});

function play() {
    win = false;
    sequence = [];
    playerSequence = [];
    command = 0;
    playerTurn = 1;
    sequenceId = 0;
    state = true;
    for (var i = 0; i < 20; i++) {
        sequence.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    sequenceId = setInterval(gameTurn, 800);
};

function gameTurn() {
    on = false;

    if (command == playerTurn) {
        clearInterval(sequenceId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (sequence[command] == 1) {
                redButton.style.backgroundColor = "tomato";
            };
            if (sequence[command] == 2) {
                blueButton.style.backgroundColor = "lightblue";
            };
            if (sequence[command] == 3) {
                greenButton.style.backgroundColor = "lightgreen";
            };
            if (sequence[command] == 4) {
                yellowButton.style.backgroundColor = "lightyellow";
            };
            command++;
        }, 200);
    }
}

function clearColor() {
    redButton.style.backgroundColor = "darkred";
    blueButton.style.backgroundColor = "darkblue";
    greenButton.style.backgroundColor = "darkgreen";
    yellowButton.style.backgroundColor = "goldenrod";
}

function commandColor() {
    redButton.style.backgroundColor = "tomato";
    blueButton.style.backgroundColor = "lightblue";
    greenButton.style.backgroundColor = "lightgreen";
    yellowButton.style.backgroundColor = "yellow";
}

redButton.addEventListener('click', (event) => {
    if (on) {
        playerSequence.push(1);
        check();
        redButton.style.backgroundColor = "tomato";
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }
    }
})

blueButton.addEventListener('click', (event) => {
    if (on) {
        playerSequence.push(2);
        check();
        blueButton.style.backgroundColor = "lightblue";
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }
    }
})

greenButton.addEventListener('click', (event) => {
    if (on) {
        playerSequence.push(3);
        check();
        greenButton.style.backgroundColor = "lightgreen";
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }
    }
})

yellowButton.addEventListener('click', (event) => {
    if (on) {
        playerSequence.push(4);
        check();
        yellowButton.style.backgroundColor = "yellow";
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }
    }
})

function check() {
    if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1])
    state = false;

    if (playerSequence.length == 20 && state) {
        winGame();
    }

    if (state == false) {
        commandColor();    
        on = false;
    }

    if (playerTurn == playerSequence.length && state && !win) {
        playerTurn++;
        playerSequence = [];
        compTurn = true;
        command = 0;
        sequenceId = setInterval(gameTurn, 800);
    }
}

function winGame() {
    commandColor();
    on = false;
    win = true;
}