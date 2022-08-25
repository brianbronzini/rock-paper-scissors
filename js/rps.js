// Get computer's choice for each round
function getComputerChoice() {
  let arr = ["ROCK", "PAPER", "SCISSORS"];
  return arr[Math.floor(Math.random() * arr.length)];
}

// Loop through 5 rounds and get choices from the computer/player
function game() {
  // Initialize game counters
  let playerScore = 0, computerScore = 0, round = 1;

  const main = document.querySelector('main');
  const playerPoint = document.querySelector('.player-score');
  const cpuPoint = document.querySelector('.comp-score');
  const playerBtn = document.querySelectorAll('div.player-btn button');
  const roundOutcome = document.querySelector('#round-outcome p');
  const endText = document.querySelector('#end-text');
  const endAlert = document.querySelector('#end-alert');
  const resetBtn = document.querySelector('#reset-btn');
  const credit = document.querySelector('#credit');
  const bender = document.querySelector('#page');
  const footerYear = document.querySelector('footer span');

  footerYear.textContent = new Date().getFullYear();

  // Get player's choice for each round
  function getPlayerChoice() {
    playerBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        let playerSelection = e.target.value;
        playRound(playerSelection, getComputerChoice());
        if (playerScore === 5 || computerScore === 5) {
          findWinner();
        }
      });
    });
  };
  getPlayerChoice();

  // Handles tie condition
  function tie() {
    roundOutcome.textContent = `Tie! Go Again!`;
    round--;
  }

  // Set all possible win/loss/tie conditions and increment the counters
  function playRound(playerSelection, computerSelection) {
    if (round <= 10) {
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
  }

  function findWinner() {
    endGame();
    if (playerScore > computerScore) {
      endText.textContent = 'WINNER!';
      endAlert.classList.add('win-sp');
    }
    else {
      endText.textContent = 'LOSER!';
      endAlert.classList.add('loss-sp');
      credit.classList.remove('disappear');
      bender.classList.remove('disappear');
    }
  }

  function endGame() {
    main.classList.add('disappear');
    endAlert.classList.remove('disappear');
    
    resetBtn.addEventListener('click', () => {
      main.classList.remove('disappear');
      endAlert.classList.remove('win-sp');
      endAlert.classList.remove('loss-sp');
      endAlert.classList.add('disappear');
      credit.classList.add('disappear');
      bender.classList.add('disappear');
      restartGame();
    });
  }

  function restartGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    playerPoint.textContent = 0;
    cpuPoint.textContent = 0;
    roundOutcome.textContent = '';
  }
}

// Run the game
game();