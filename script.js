
//Rock Paper Scissors
// create a SCORE variable
let score = 0;
// attach SCORE variable to HTML
let sc = document.getElementById('scoreDisplay')

//make variable for computers choice
let computerChoice;
//make variable for players choice
let playerChoice;
//take INPUT of choice for player

function playerPrompt() {
   let choice = prompt("Pick your selection")
        if (choice.toLowerCase() == "rock") {
            console.log("Player chooses Rock")
            playerChoice = "Rock"
            return play()
        } else if (choice.toLowerCase() == "scissors") {
            console.log("Player Chooses Scissors")
            playerChoice = "Scissors";
            return play()
        } else if (choice.toLowerCase() == "paper") {
            console.log("Player chooses Paper")
            playerChoice = "Paper";
            return play()
} else {
    alert("Make a valid choice!")
    return playerPrompt()
}
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
    computerPlay()
    var lose = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    var win = `You WON! ${playerChoice} beats ${computerChoice}!`;
        if (computerChoice === playerChoice) {
            console.log("DRAW")
            return playAgain() ;
        } else if (computerChoice === "Rock" && playerChoice !== "Paper") {
            console.log(lose)
            return playAgain()
        } else if (computerChoice === "Paper" && playerChoice !== "Scissors") {
            console.log(lose)
            return playAgain()
        } else if (computerChoice === "Scissors" && playerChoice !== "Rock") {
            console.log(lose)
            return playAgain()
        } else {
            score++
            console.log(win)
            playAgain()
            }
        }

function playAgain () {
   if (score >= 5)
    {
        sc.textContent = score;
        return alert("You've won the game!")
    }
   else {
    sc.textContent = score;
        console.log("Score is " + score)
        playerPrompt();
    }

}

window.onload(playerPrompt());


//COMPARE players choice vs computers choice
//IF computer choice IS EQUAL to player choice - TIE

//IF computer chooses Rock AND player chooses paper - WIN
//IF computer chooses Rock AND player chooses scissors - LOSE
//IF computer chooses Rock AND player chooses rock - TIE
//IF computer chooses Paper AND player chooses Paper - TIE
//If computer chooses Paper AND player chooses Rock - LOSE
//If computer chooses Paper AND player chooses Scissors - WIN
//If computer chooses Scissors AND player chooses Rock - WIN
//If Computer chooses Scissors AND player chooses Paper - LOSE
//If Computer Chooses Scissors AND player chooses Scissors - TIE
