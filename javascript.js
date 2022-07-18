
// Randomly return "Rock", "Paper", "Scissors"
function getComputerChoice() {
    rand0to3 = Math.floor(Math.random() * 3);   //Randomly returns 0 to 2
    choice = "None";
    switch (rand0to3) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    return choice;
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    // your code here!
}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));