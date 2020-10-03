
function computerPlay() {
    let compChoices = ['rock', 'paper', 'scissors']; // Create a variable compChoices with an array

    return compChoices[Math.floor(Math.random() * compChoices.length)]; // Return a random choice between rock, paper and scissors
}

// Declare variables win and lose
let win = 0,
    lose = 0;


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === 'rock') { // Compare cases with if else
        if (computerSelection === 'paper') {
            lose++;
            return 'You lose, paper beats rock!';

        } else if (computerSelection === 'scissors') {
            win++;
            return 'You win, rock beats scissors!';

        } else {
            return 'It\'s a tie!';
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            win++;
            return 'You win, paper beats rock!';

        } else if (computerSelection === 'scissors') {
            lose++;
            return 'You lose, scissors beat paper!';

        } else {
            return 'It\'s a tie!';
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            lose++;

            return 'You lose, rock beats scissors!';

        } else if (computerSelection === 'paper') {
            win++;
            return 'You win, scissors beat paper!';

        } else {
            return 'It\'s a tie!';
        }
    } else {
        
        alert('Please enter rock, paper or scissors!'); // Tell the user to input rock, paper or scissors
        round--;
    }

}

function game() {

    for (let round = 0; round < 5; round++) { // Loop 5 rounds

        let playerSelection = prompt('Enter rock, paper or scissors:'); // Prompt the user 
        let computerSelection = computerPlay(); // The function computerPlay is assigned to computerSelection
        console.log(playRound(playerSelection, computerSelection)); // Console.log the function playRound
    }

    if (win > lose) { // Win is greater than lose
        console.log('You are the winner!');
    } else if (win < lose) { // Lose is greater than win
        console.log('You are the loser!');
    } else {
        console.log('It\'s a tie!');
    }

}

game(); // Call the game() function
