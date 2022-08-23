// Get computer's choice for each round
function getComputerChoice() {
  let arr = ["ROCK", "PAPER", "SCISSORS"];
  let i = Math.floor(Math.random() * 3);
  let cpuChoice = arr[i];
  
  return cpuChoice;
}

// Loop through 5 rounds and get choices from the computer/player
function game() {
  // Initialize game counters
  let playerScore = 0, computerScore = 0, round = 1;

  const roundOutcome = document.querySelector('#round-outcome p');
  const playerBtn = document.querySelectorAll('div.player-btn button');
  const cpuPoint = document.querySelector('.comp-score');
  const playerPoint = document.querySelector('.player-score');
  const footerYear = document.querySelector('footer span');

  footerYear.textContent = new Date().getFullYear();

  // Get player's choice for each round
  function getPlayerChoice() {
    playerBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        let playerSelection = e.target.value;
        playRound(playerSelection, getComputerChoice());
      });
    });
  }
  getPlayerChoice();

  // Handles tie condition
  function tie() {
    roundOutcome.textContent = `Tie! Go Again!`;
    round--;
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
          playerPoint.textContent = playerScore;
          roundOutcome.textContent = (`You win round ${round}! ${playerSelection} beats ${computerSelection}`);
      }
      else {
        computerScore++;
        cpuPoint.textContent = computerScore;
        roundOutcome.textContent = (`Computer wins round ${round}.. ${computerSelection} beats ${playerSelection}`);
      }
      round++;
    }
    if (playerScore >= 3) {
      alert('YOU WIN! :D');
    }
    else if (computerScore >= 3) {
      alert('YOU LOSE! D:');
    }
  }
}

// Run the game
game();