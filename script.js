function play(playerChoice){
 let computerChoice = pickComputerMove();
 let result= '';
 if(playerChoice===computerChoice){
    result= 'Draw';
    } 
 else if(playerChoice==='rock'){
        if(computerChoice==='hand'){
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
        else if (computerChoice==='hand') {
            result='You win.';
        } 
      
    } 
 else if (playerChoice==='hand') {
        if (computerChoice==='scissors') {
            result='You lose.';
        } 
        else if (computerChoice ==='rock') {
            result='You win.';
        } 
    }
 if (result === 'You win.') {
            score.wins += 1;
          } else if (result === 'You lose.') {
            score.losses += 1;
          } else if (result === 'Draw') {
            score.draws += 1;
          }
    
    updateScoreElement();
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You
  <img class="result" src="images/${playerChoice}.png" class="move-icon">
  <img class="result" id="id" src="images/${computerChoice}.png" class="move-icon">
  Computer`;
    }



function pickComputerMove() {
    let number = Math.random();
    let computerChoice = '';
    if (number >= 0 && number < 1 / 3) {
        computerChoice = 'rock';
    } 
    else if (number >= 1 / 3 && number < 2 / 3) {
        computerChoice = 'hand';
    } 
    else if (number >= 2 / 3 && number < 1) {
        computerChoice = 'scissors';
    }  
    return computerChoice;
     
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    draws: 0
  };
  


  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
  }
  
function reset(){
    score.wins=0;
    score.losses=0;
    score.draws=0;
    localStorage.removeItem('score');
    document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.wins},Losses: ${score.losses},Draws: ${score.draws}`;
}