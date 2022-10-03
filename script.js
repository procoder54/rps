const choice = ['rock', 'paper', 'scissor'];
function getComputerChoice() {
  let result = Math.floor(Math.random() * 10) % 3;
  return choice[result];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie!`;
  }

  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return `You Lose! Paper beats Rock`;
    }
    else {
      return `You Won! Rock beats Scissor`
    }
  }
  
  if (playerSelection === 'paper') {
    if (computerSelection === 'scissor') {
      return `You Lose! Scissor beats Paper`;
    }
    else {
      return `Your Won! Paper beats Rock`
    }
  }

  if (playerSelection = 'scissor') {
    if (computerSelection === 'rock') {
      return `You Lose! Rock beats Scissor`;
    }
    else {
      return `You Win! Scissor beats Paper`
    }

  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))








console.log(playerSelection.toLowerCase(), computerSelection);