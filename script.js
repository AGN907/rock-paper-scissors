const getComputerChoice = () => {

    const computerChoices = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[rand];
}

function playGame(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        return 'It\'s a tie!';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'Computer win!';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'Computer win!';
    } else if (computerSelection ==='scissors' && playerSelection === 'paper') {
        return 'Computer win!';
    } else {
        return 'Player win!';
            }

        }




