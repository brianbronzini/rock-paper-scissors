// Get computer's choice for each round
let getComputerChoice = () => {
  let arr = ["ROCK", "PAPER", "SCISSORS"];
  let i = Math.floor(Math.random() * 3);
  let choice = arr[i];
  
  return choice;
}

// Loop through 5 rounds and get choices from the computer/player
function game() {
  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt('Please choose (Rock, Paper, or Scissors): ').toUpperCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  // Set all possible win/loss/tie conditions and increment the counters
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      console.log('Tie! Go again!');
    }
    for (let playerScore = 0; playerScore < 3; playerScore++) {
      if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
      )
      console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
    }
    for (let computerScore = 0; computerScore < 3; computerScore++) {
      if (
        (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER")
      )
      console.log(`Computer wins this round.. ${computerSelection} beats ${playerSelection}`);
    }
  }
}

// Run the game
game();