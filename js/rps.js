// Loop through 5 rounds and get choices from the computer/player
function game() {
  // Initialize game counters
  let playerScore = 0, computerScore = 0, round = 1;

  // Get player's choice for each round
  function getPlayerChoice() {
    const playerBtn = document.querySelectorAll('div.player-btn button');
    playerBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        let playerSelection = e.target.value;
        playRound(playerSelection, getComputerChoice());
      });
    });
  }
  getPlayerChoice();
  
  // const playerCurrPoints = document.getElementById("player-score");
  // const computerCurrPoints = document.getElementById("player-score");

  // Handles tie condition
  function tie() {
    round--;
    console.log('Tie! Go Again!');
  }

  // Set all possible win/loss/tie conditions and increment the counters
  function playRound(playerSelection, computerSelection) {
    if (round <= 5) {
      if (playerSelection === computerSelection) {
        tie();
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
      round++;
    }
    if (playerScore === 3) {
      alert('YOU WIN! :D');
    }
    else if (computerScore === 3) {
      alert('YOU LOSE! D:');
    }
  }
}

// Run the game
game();

// Get computer's choice for each round
function getComputerChoice() {
  let arr = ["ROCK", "PAPER", "SCISSORS"];
  let i = Math.floor(Math.random() * 3);
  let cpuChoice = arr[i];
  
  return cpuChoice;
}