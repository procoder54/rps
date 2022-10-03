const choice=['rock','paper','scissor'];
function getComputerChoice(){
  let result = Math.floor(Math.random()*10)%3;
  return choice[result];
}

console.log(getComputerChoice())