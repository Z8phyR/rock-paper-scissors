
//Rock Paper Scissors
// create a SCORE variable for each player
let playerScore = 0;
let compScore = 0;
// attach SCORE variable to HTML
let playerScoreDisplay = document.getElementById('playerScore');
let compScoreDisplay = document.getElementById('compScore');
let playerChoiceDisplay = document.getElementById('playerChoice');
let compChoiceDisplay = document.getElementById('computerChoice');
let resultDisplay = document.getElementById('resultDisplay');
//make variable for computers choice
let computerChoice;
//make variable for players choice
let playerChoice;
let stopgame = false;
//take INPUT of choice for player

function resetGame() {
    let reset = document.querySelector('.resetbutton')
    let resetButton = document.createElement('button')
    resetButton.classList.add('resetgame');
    resetButton.innerHTML = "Play again!";
    reset.appendChild(resetButton)
    resetButton.addEventListener("click", () => {
        resetScore();
        reset.removeChild(resetButton);

    });
    }
const button = document.querySelectorAll(".select")
button.forEach(button => button.addEventListener("click",(event) => {
    playerChoice = event.target.id
    console.log(`Player chooses ${playerChoice}`)
    return play();
    }
));



// RESET the Game
function resetScore() {
    playerScore = 0;
    compScore = 0;
    playerScoreDisplay.textContent = playerScore;
    compScoreDisplay.textContent = compScore;
    resultDisplay.textContent = "New Game!";
    stopgame = false;
    console.log("RESETTING THE SCORE!");

}
//take RANDOM INPUT of choice for computer
function computerPlay() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum === 1) {
        computerChoice = "Rock"
    }
    if (randNum === 2) {
        computerChoice = "Paper"
    } 
    if (randNum === 3) {
        computerChoice = "Scissors"
    }
    console.log(`Computer chooses: ${computerChoice}!`)
}

// PLAY the game
function play() {
    if (stopgame) { 
        return console.log ("Game has STOPPED!")
     }
     else {
    computerPlay()
    var lose = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    var win = `You WON! ${playerChoice} beats ${computerChoice}!`;
    compChoiceDisplay.textContent = computerChoice;
    playerChoiceDisplay.textContent = playerChoice;
        if (computerChoice === playerChoice) {
            resultDisplay.textContent = "Its a DRAW! Try again!";
            console.log("DRAW")
            return playAgain() ;
        } else if ( (computerChoice === "Rock" && playerChoice !== "Paper") ||
                (computerChoice === "Paper" && playerChoice !== "Scissors") || 
                (computerChoice === "Scissors" && playerChoice !== "Rock") )
            {   console.log(lose)
                resultDisplay.textContent = lose;
                compScore++;
                return playAgain()
        }
         else {
            playerScore++
            resultDisplay.textContent = win;
            console.log(win)
            return playAgain()
            }
        }
    }
function playAgain () {
   if (playerScore >= 5) {
        stopgame = true;
        playerScoreDisplay.textContent = playerScore;
        compScoreDisplay.textContent = compScore;
        resultDisplay.textContent = "You WIN the game! Play Again?"
        return resetGame(); 
    } 
    else if (compScore >= 5) {
        stopgame = true;
        playerScoreDisplay.textContent = playerScore;
        compScoreDisplay.textContent = compScore;
        resultDisplay.textContent = "You LOST the game!! Play Again?"
        return resetGame();
    }
    else {
        playerScoreDisplay.textContent = playerScore;
        compScoreDisplay.textContent = compScore;
        return console.log("Score is " + playerScore)
        // playerPrompt();
    }
}
