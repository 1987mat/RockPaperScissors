const scoreMessage = document.querySelector('.score-message');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

function computerPlay() {
    let compChoices = ['rock', 'paper', 'scissors']; // Create a variable compChoices with an array

    return compChoices[Math.floor(Math.random() * compChoices.length)]; // Return a random choice between rock, paper and scissors
}

// Select all 3 buttons
const buttons = document.querySelectorAll('.selection');

let userChoice;
let pScore = 0;
let cScore = 0;

// Loop through the buttons and add an event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        checkWinner();

    });
});


function checkWinner() {

    let computerChoice = computerPlay();

    if (userChoice === computerChoice) {
        scoreMessage.innerHTML = 'It\'s a draw!';

    } else if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper') {
        scoreMessage.textContent = 'You win!';

        updateScore();
    

    } else {
        scoreMessage.textContent = 'Computer Wins!' 

        updateCompScore();


    }

    if(pScore === 5){
        
        alert('You are the winner! Reload the page to play');
        
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        scoreMessage.textContent = '';
    } else if(cScore === 5){
        alert('You are the loser! Reload the page to play')

        playerScore.textContent = '0';
        computerScore.textContent = '0';
        scoreMessage.textContent = '';
        
    }


}

function updateCompScore(){
    cScore += 1;

    computerScore.textContent = cScore;
}

function updateScore(){
    pScore += 1;

    playerScore.textContent = pScore;
 
}



