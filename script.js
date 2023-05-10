const getComputerChoice = () => {

    const computerChoices = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[rand];
}

function captilize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playGame(computerSelection, playerSelection) {
    playerSelection = captilize(playerSelection);
    computerSelection = captilize(computerSelection);


    if (computerSelection === playerSelection) {
         console.log(`It's a tie!`);

    } else if (computerSelection === 'Rock' && (playerSelection === 'Scissors' )) {
         console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
         return false;

    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
         console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
         return false;

    } else if (computerSelection ==='Scissors' && playerSelection === 'Paper') {
         console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
         return false;

    } else {
         console.log(`You win! ${playerSelection} beats ${computerSelection}`);
         return true;
            }

        }

function game() {
    let keepGoing = true;
    let count = 0;
    let playerScore = 0;
    let computerScore = 0;


    while (keepGoing) {
        if (count < 5){

            const playerSelection = prompt('Rock, Paper, or Scissors?');
            const computerSelection = getComputerChoice();
            const result = playGame(computerSelection, playerSelection);
    
            if (result === true) {
                playerScore++;
            } else if (result === false) {
                computerScore++;
            }
            count++;

        }

        else if (count === 5) {
            console.log(`You: ${playerScore} Computer: ${computerScore}`);
            let winnerMessage = (playerScore === computerScore) ? 'It\'s a tie!' :
                 (playerScore > computerScore) ? 'You\'re the winner!' : 'The computer is the winner!';
            
            console.log(winnerMessage);

            keepGoing = false;
        }
    }
}




game();