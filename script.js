

function getComputerChoice() {

    const computerChoices = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[rand];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(e) {
    const playerSelection = capitalize(e)
    const computerSelection = capitalize(getComputerChoice())




    if (computerSelection === playerSelection) {
         gameResult.textContent = `It's a tie!`;

    } else if (computerSelection === 'Rock' && (playerSelection === 'Scissors' )) {
        gameResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
         return false;

    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        gameResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
         return false;

    } else if (computerSelection ==='Scissors' && playerSelection === 'Paper') {
         gameResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
         return false;

    } else {
         gameResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
         return true;
            }

        }


function playGame(e) {

    const playerSelection = capitalize(e.target.parentNode.getAttribute('data-move'))
    

    let result = playRound(playerSelection)

    if (result === true) {
        playerScore.textContent = `${+playerScore.textContent + 1}`
    } else {
        computerScore.textContent = `${+computerScore.textContent + 1}`
    }


    let finalResult = checkScores()

    if (finalResult) {
        gameResult.textContent = `The game has finished! the final victor is ${finalResult}`
        restartBtn.classList.remove('hide')
        

    }


}

function startGame(e) {
    gameContainer.classList.remove('hide')
    e.target.parentNode.classList.add('hide')
}

function checkScores() {
    if (+playerScore.textContent === 5) {
        return 'You'
    } else if (+computerScore.textContent === 5) {
        return 'The computer'
    }
}



startBtn.addEventListener('click', startGame)


const choices = document.querySelectorAll('.choice')

const startBtn = document.querySelector('#start')
const restartBtn = document.querySelector('#restart')
const gameResult = document.querySelector('.game-result p')
const gameContainer = document.querySelector('.game-container')


let playerScore = document.querySelector('#player-score p')
let computerScore = document.querySelector('#computer-score p')
choices.forEach(item => item.addEventListener('click', playGame))
