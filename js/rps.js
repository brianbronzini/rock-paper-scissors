// Get computer's choice for each round
function getComputerChoice() {
  let arr = ["ROCK", "PAPER", "SCISSORS"];
  let i = Math.floor(Math.random() * 3);
  let choice = arr[i];
  
  return choice;
}

// Loop through 5 rounds and get choices from the computer/player
function game() {
  // Initialize score counters for function scope
  let playerScore, computerScore;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt('Please choose (Rock, Paper, or Scissors): ').toUpperCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  // Set all possible win/loss/tie conditions and increment the counters
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      console.log('Tie! Go again!');
    }
    else if (
      (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
      playerScore++;
      console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
    }
    else {
      computerScore++;
      console.log(`Computer wins this round.. ${computerSelection} beats ${playerSelection}`);
    }
  }
}

// Run the game
game();