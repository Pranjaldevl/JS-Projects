function play(playerChoice){
 let computerChoice = pickComputerMove();
 let result= '';
 if(playerChoice===computerChoice){
    result= 'Draw';
    } 
 else if(playerChoice==='rock'){
        if(computerChoice==='paper'){
            result='You lose.';
        } 
        else if (computerChoice==='scissors') {
            result = 'You win.';
        }
    }  
 else if (playerChoice==='scissors') {
        if (computerChoice==='rock') {
            result='You lose.';
        } 
        else if (computerChoice==='paper') {
            result='You win.';
        } 
      
    } 
 else if (playerChoice==='paper') {
        if (computerChoice==='scissors') {
            result='You lose.';
        } 
        else if (computerChoice ==='rock') {
            result='You win.';
        } 
    }
}
function pickComputerMove() {
    let number = Math.random();
    let computerMove = '';
    if (number >= 0 && number < 1 / 3) {
        computerChoice = 'rock';
    } 
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = 'paper';
    } 
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerChoice = 'scissors';
    }  
    return computerChoice;
     if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }
  
  }

//
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
  updateScoreElement();

   
    localStorage.setItem('score', JSON.stringify(score));
  
    updateScoreElement();
  
    document.querySelector('.js-result').innerHTML = result;
  
    document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
  
  
  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  
