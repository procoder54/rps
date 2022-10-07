const choice = ['rock', 'paper', 'scissor'];
const button = document.querySelectorAll(`.choice`);
const score = document.querySelector(`#score`);
let playerScore = 0;
let computerScore = 0;


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
      return `You Won! Scissor beats Paper`
    }
  }
}


function currentScore(result) {
  if (result.textContent.substring(4, 7) === 'Won') {
    playerScore += 1;
  }
  else if (result.textContent.substring(4, 8) === 'Lose') {
    computerScore += 1;
  }
  const player = document.querySelector(`#player-score`);
  const computer = document.querySelector(`#computer-score`);
  player.textContent = `YOUR SCORE: ${playerScore}`;
  computer.textContent = `COMPUTER SCORE: ${computerScore}`;
  score.appendChild(player);
  score.appendChild(computer);
}


function announceWinner() {
  const winner = document.createElement(`div`)
  if (computerScore === 5) {
    winner.textContent = `>> YOU LOSE THE GAME`;
  }
  else if (playerScore === 5) {
    winner.textContent = `>> YOU WON THE GAME`;
  }
  score.insertBefore(winner, score.firstChild)
}


function game() {
  button.forEach(element => {
    element.addEventListener(`click`, () => {
      const playerSelection = element.textContent;
      const computerSelection = getComputerChoice();
      const leaderBoard = document.querySelector(`#result`);
      const result = document.createElement(`p`);
      result.textContent = playRound(playerSelection.toLowerCase(), computerSelection);
      leaderBoard.insertBefore(result, leaderBoard.firstChild);
      currentScore(result);
      announceWinner();
    })
  });
  if (playerScore === 5 || computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
  }
}

game();