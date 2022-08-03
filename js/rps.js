// Get computer's choice for each round
let getComputerChoice = () => {
  let arr = ["ROCK", "PAPER", "SCISSORS"];
  let i = Math.floor(Math.random() * 3);
  let choice = arr[i];
  
  return choice;
}
