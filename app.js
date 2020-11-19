const game = () => {
    let pScore = 0;
    let Cscore = 0;


    const StartGame = () => {
        const Playbtn = document.querySelector('.intro button');
        const introscreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        Playbtn.addEventListener("click", () => {
            introscreen.classList.add("fadeout");
            match.classList.add('fadein');
        });
    };

    // play match

    const playmatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerhand = document.querySelector('.Playerhand');
        const computerhand = document.querySelector('.Computerhand');
        const hands = document.querySelectorAll(" .hands img");

        hands.forEach((hand) => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        // Computer options
        const computeroptions = ["rock", "paper", "scissors"];

        options.forEach( (option) => {
                option.addEventListener("click", function () {
                    const computernumber = Math.floor(Math.random() * 3);
                    const computerChoice = computeroptions[computernumber];

                    setTimeout(() => {
                        comparehands(this.textContent, computerChoice);
                        // updating the images
                        playerhand.src = `./assets/${this.textContent}.png`;
                        computerhand.src = `./assets/${computerChoice}.png`;

                    }, 2000);

                    playerhand.style.animation = "Shakeplayer 2s ease";
                    computerhand.style.animation = "shakeComputer 2s ease";
                });
            });

    };
    const updateScore = () => {
        const playerScore = document.querySelector(".player_score p");
        const computerscore = document.querySelector(".Computer_Score p");

        playerScore.textContent = pScore;
        computerscore.textContent = Cscore;
    };

    const comparehands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a Tie";
            return;
        }

        if (playerChoice === "rock") {
            if (computerChoice === "paper") {
                winner.textContent = "Computer is the Winner";
                Cscore++;
                updateScore();end(pScore,Cscore);
                return;
            }
            else {
                winner.textContent = "Player is the winner";
                pScore++;
                updateScore();end(pScore,Cscore);
                return;
            }
        }

        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer is the Winner";
                Cscore++;
                updateScore();end(pScore,Cscore);
                return;
            }
            else {
                winner.textContent = "Player is the winner";
                pScore++;
                updateScore();end(pScore,Cscore);
                return;
            }
        }

        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer is the Winner";
                Cscore++;
                updateScore();end(pScore,Cscore);
                return;
            }
            else {
                winner.textContent = "Player is the winner";
                pScore++;
                updateScore();end(pScore,Cscore);
                return;
            }
        }
    };
    
     const end = (pScore, CScore) => {
        if (pScore === 5) {
            winner.textContent = "Game Over . The Winner is Player";
            return;
        }
        else if (CScore === 5) {
            winner.textContent = "Game Over . The Winner is Computer";
            return;
        }
    };
   
    // Calling the Functions
    StartGame();
    playmatch();
    
};

game();




