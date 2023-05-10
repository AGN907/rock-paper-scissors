const getComputerChoice = () => {

    const computerChoices = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[rand];
}






