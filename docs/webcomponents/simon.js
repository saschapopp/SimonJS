export class simonGame extends HTMLElement {

    constructor() 
    {
        super();    
        this.attachShadow({ mode: 'open' });

        this.rounds = 8;
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
                        this.clearColor();
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
                        this.clearColor();
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
                        this.clearColor();
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
        this.sequenceId = setInterval( () => this.gameTurn(), 800);
    };

    gameTurn() {
        this.on = false;

        if (this.command == this.playerTurn) {
            clearInterval(this.sequenceId);
            this.compTurn = false;
            this.clearColor();
            this.on = true;
        }

        if (this.compTurn) {
            this.clearColor();
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

        if (this.playerSequence.length == this.rounds && this.state) {
            this.winGame();
        }

        if (this.state == false) {
            this.commandColor();    
            this.on = false;
            this.turnCounter.innerHTML = "Congratulations, you scored " + this.playerTurn + "!";
            this.startButton.disabled = false;
            this.startButton.style.backgroundColor = "white";    
        }

        if (this.playerTurn == this.playerSequence.length && this.state && !this.win) {
            this.playerTurn++;
            this.playerSequence = [];
            this.compTurn = true;
            this.command = 0;
            this.sequenceId = setInterval( () => this.gameTurn(), 800);
        }
    }

    winGame() {
        this.commandColor();
        this.turnCounter.innerHTML = "Congratulations, you won the game!";
        this.on = false;
        this.win = true;
        this.startButton.disabled = false;
        this.startButton.style.backgroundColor = "white";
    }

    render() {
        this.shadowRoot.innerHTML =`
            
        <style>
        #gameState {
            font-family: Impact, 'Arial Narrow Bold', sans-serif;
            background-color: none;
            color: white;
            font-size: 1.5em;
            text-align: center;
            margin-top: 25px;
        }
        #redBtn,
        #blueBtn,
        #greenBtn,
        #yellowBtn {
            border: none;
            height: 25%;
            width: 40%;
            position: absolute;
            margin: 0px;
            padding: 0px;
        }

        #redBtn {
            top: 24.5%;
            left: 9%;
            background: darkred;
            border-radius: 150px 30px 30px 30px;
        }

        #blueBtn {
            top: 24.5%;
            right: 9%;
            background: darkblue;
            border-radius: 30px 150px 30px 30px;
        }

        #greenBtn {
            bottom: 24.5%;
            left: 9%;
            background: darkgreen;
            border-radius: 30px 30px 30px 150px;
        }

        #yellowBtn {
            bottom: 24.5%;
            right: 9%;
            background: goldenrod;
            border-radius: 30px 30px 150px 30px;
        }

        #startBtn {
            font-family: Impact, 'Arial Narrow Bold', sans-serif;
            background: white;
            text-align: center;
            border: none;
            width: 40%;
            position: absolute;
            bottom: 10%;
            margin-left: 30%;
            margin-right: 30%;
            border-radius: 30px;
            color: black;
            font-size: 1.5em;
        }

        #startBtn:active {
            background: black;
            color: white;

        }
        #count {
            font-family: Impact, 'Arial Narrow Bold', sans-serif;
            background-color: none;
            color: white;
            font-size: 1.5em;
            text-align: center;
            margin-top: 15px;

        }
        </style>
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
//window.customElements.define('simon-game', simonGame);
