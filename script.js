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


function game(){
  let playerScore=0;
  let computerScore=0;
  while(playerScore!==5 && computerScore!==5){
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    result = playRound(playerSelection,computerSelection);
    if(result.slice(4,5)==='W'){
      playerScore+=1;
    }
    if(result.slice(4,5)==='L'){
      computerScore+=1;
    }
    console.log(playerScore,computerScore);
    console.log(result)
  }
  if(playerScore===5){
    console.log(`>> YOU WON THE GAME`)
  }
  else{
    console.log(`>> YOU LOSE THE GAME`)
  }
}

game();
