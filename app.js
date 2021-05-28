function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "Paper beats Rock, Computer Wins";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock beats Scissors, Player Wins";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper beats Rock, Player Wins";
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Scissors beats Paper, Computer Wins";
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Rock beats Scissors, Computer Wins";
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors beats Paper, Player Wins";
    }
  }

function computerPlay(){
    const computerOption = ["rock", "paper", "scissors"];
    let computerSelection = Math.floor(Math.random() * computerOption.length);
    if (computerSelection === 0) {
        return "rock";
    }
    if (computerSelection === 1) {
        return "scissors";
    }
    if (computerSelection === 2) {
        return "paper";
    }
}


  const playerSelection = "rock";
  const computerSelection = computerPlay();
  

//console.log(computerPlay)

  console.log(playRound(playerSelection, computerSelection));