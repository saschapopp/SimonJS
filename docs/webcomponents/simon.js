export class simonGame extends HTMLElement {

    constructor() 
    {
        super();    
        this.attachShadow({ mode: 'open' });

        this.sequence = [];
        this.playerSequence = []
        this.command;
        this.playerTurn;
        this.state;
        this.compTurn;
        this.sequenceId;
        this.win
        this.on = false;
    }

    connectedCallback() {
        this.render();

        this.turnCounter = this.shadowRoot.querySelector("#gameState");
        this.redButton = this.shadowRoot.querySelector("#redBtn");
        this.blueButton = this.shadowRoot.querySelector("#blueBtn");
        this.greenButton = this.shadowRoot.querySelector("#greenBtn");
        this.yellowButton = this.shadowRoot.querySelector("#yellowBtn");
        this.startButton = this.shadowRoot.querySelector("#startBtn");

        this.startButton.addEventListener('click', (event) => {
            clearInterval(this.sequenceId);
            this.on = true;
            this.play();
        });

        this.redButton.addEventListener('click', (event) => {
            if (this.on) {
                this.playerSequence.push(1);
                this.check();
                this.redButton.style.backgroundColor = "tomato";
                if(!this.win) {
                    setTimeout(() => {
                        clearColor();
                    }, 300)
                }
            }
        })

        this.blueButton.addEventListener('click', (event) => {
            if (this.on) {
                this.playerSequence.push(2);
                this.check();
                this.blueButton.style.backgroundColor = "lightblue";
                if(!this.win) {
                    setTimeout(() => {
                        clearColor();
                    }, 300)
                }
            }
        })

        this.greenButton.addEventListener('click', (event) => {
            if (this.on) {
                this.playerSequence.push(3);
                this.check();
                this.greenButton.style.backgroundColor = "lightgreen";
                if(!this.win) {
                    setTimeout(() => {
                        clearColor();
                    }, 300)
                }
            }
        })

        this.yellowButton.addEventListener('click', (event) => {
            if (this.on) {
                this.playerSequence.push(4);
                this.check();
                this.yellowButton.style.backgroundColor = "yellow";
                if(!this.win) {
                    setTimeout(() => {
                        clearColor();
                    }, 300)
                }
            }
        })  
    }

    clearColor() {
        this.redButton.style.backgroundColor = "darkred";
        this.blueButton.style.backgroundColor = "darkblue";
        this.greenButton.style.backgroundColor = "darkgreen";
        this.yellowButton.style.backgroundColor = "goldenrod";
    }

    commandColor() {
        this.redButton.style.backgroundColor = "tomato";
        this.blueButton.style.backgroundColor = "lightblue";
        this.greenButton.style.backgroundColor = "lightgreen";
        this.yellowButton.style.backgroundColor = "yellow";
    }

    play() {
        this.win = false;
        this.startButton.disabled = true;
        this.startButton.style.backgroundColor = "black";
        this.sequence = [];
        this.playerSequence = [];
        this.command = 0;
        this.playerTurn = 1;
        this.sequenceId = 0;
        this.turnCounter.innerHTML = "Replay Pattern";
        this.state = true;

        for (var i = 0; i < 20; i++) {
            this.sequence.push(Math.floor(Math.random() * 4) + 1);
        }
        this.compTurn = true;
        this.sequenceId = setInterval(this.gameTurn, 800);
    };

    gameTurn() {
        this.on = false;

        if (this.command == this.playerTurn) {
            clearInterval(this.sequenceId);
            this.compTurn = false;
            clearColor();
            this.on = true;
        }

        if (this.compTurn) {
            clearColor();
            setTimeout(() => {
                if (this.sequence[this.command] == 1) {
                    this.redButton.style.backgroundColor = "tomato";
                };
                if (this.sequence[this.command] == 2) {
                    this.blueButton.style.backgroundColor = "lightblue";
                    };
                if (this.sequence[this.command] == 3) {
                    this.greenButton.style.backgroundColor = "lightgreen";
                    };
                if (this.sequence[this.command] == 4) {
                    this.yellowButton.style.backgroundColor = "yellow";
                    };
                this.command++;
            }, 200);
        }
    }

    check() {
        if (this.playerSequence[this.playerSequence.length - 1] !== this.sequence[this.playerSequence.length - 1])
        this.state = false;

        if (this.playerSequence.length == 20 && state) {
            this.winGame();
        }

        if (this.state == false) {
            this.commandColor();    
            this.on = false;
            this.turnCounter.innerHTML = "Congrats you did " + this.playerTurn + " turns!";
            this.startButton.disabled = false;
            this.startButton.style.backgroundColor = "white";    
        }

        if (this.playerTurn == this.playerSequence.length && this.state && !this.win) {
            this.playerTurn++;
            this.playerSequence = [];
            this.compTurn = true;
            this.command = 0;
            this.sequenceId = setInterval(this.gameTurn, 800);
        }
    }

    winGame() {
        this.commandColor();
        this.turnCounter.innerHTML = "You Won!";
        this.on = false;
        this.win = true;
        this.startButton.disabled = false;
        this.startButton.style.backgroundColor = "white";
    }

    render() {
        this.shadowRoot.innerHTML =`
            <link rel="stylesheet" href="webcomponents/simon.css"></link>
            <main id="game">
            <div id="gameState">Replay Pattern</div>
            <div id="btns">
                <div class="btns" id="redBtn"></div>
                <div class="btns" id="blueBtn"></div>
                <div class="btns" id="greenBtn"></div>
                <div class="btns" id="yellowBtn"></div>
            </div>
            <div id="controlBtns">
                <button class="button" id="startBtn">Start</button>
            </div>
        </main> 
        `;
    }
}