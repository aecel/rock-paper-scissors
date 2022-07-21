
// Randomly return "Rock", "Paper", "Scissors"
function getComputerChoice() {
    rand0to3 = Math.floor(Math.random() * 3);   //Randomly returns 0 to 2
    choice = "";
    switch (rand0to3) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

// console.log(getComputerChoice());

//Returns an appropriate dialogue (You win / You lose, etc.)
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.trim();
    playerSelection = playerSelection.toLowerCase();

    //Normalize playerSelection
    dialogue = "";
    playerSelectionNorm = "";
    if (playerSelection.includes("rock") && playerSelection.length == 4) {
        playerSelectionNorm = "rock";
    } else if (playerSelection.includes("paper") && playerSelection.length == 5) {
        playerSelectionNorm = "paper";
    } else if (playerSelection.includes("scissors") && playerSelection.length == 8) {
        playerSelectionNorm = "scissors";
    } else {
        playerSelectionNorm = "nah man";
    }

    switch (playerSelectionNorm) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    dialogue = "It's a tie!";
                    break;
                case "paper":
                    dialogue = "You lose! Paper beats rock.";
                    break;
                case "scissors":
                    dialogue = "You win! Rock beats scissors.";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    dialogue = "You win! Paper beats rock.";
                    break;
                case "paper":
                    dialogue = "It's a tie!";
                    break;
                case "scissors":
                    dialogue = "You lose! Scissors beats paper.";
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    dialogue = "You lose! Rock beats scissors.";
                    break;
                case "paper":
                    dialogue = "You win! Scissors beats paper.";
                    break;
                case "scissors":
                    dialogue = "It's a tie!";
                    break;
            }
            break;
        default:
            dialogue = "Wrong input, sadge."
    }

    return dialogue;
}

//Plays 5 rounds of rock-paper-scissors
function game(playerClick) {
    playerPoint = 0;
    computerPoint = 0;
    // for (let i = 0; i < 5; i++) {
    playerSelection = playerClick;
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    if (result.includes("win")) {
        playerPoint++;
    } else if (result.includes("lose")) {
        computerPoint++;
    } else if (result.includes("tie")) {
        // continue;
    } else {
        console.log("Invalid input. Please try again.");
        i--;
    }
    // }

    if (playerPoint > computerPoint) {
        return `Congratulations! You won!\nYour points: ${playerPoint}\nComputer's points: ${computerPoint}`;
    } else if (computerPoint > playerPoint) {
        return `You lost! Better luck next time\nYour points: ${playerPoint}\nComputer's points: ${computerPoint}`;
    } else {
        return `It's a tie! Try again next time\nYour points: ${playerPoint}\nComputer's points: ${computerPoint}`;
    }
}

// const buttons = document.querySelectorAll(".button-img");
// buttons.forEach((button) => {
//     button.addEventListener("click", isClicked);
// });
// let clickedBoi = "";

let rockClicked = () => {
    game('rock');
}

let paperClicked = () => {
    game('paper');
}

let scissorsClicked = () => {
    game('scissors');
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", rockClicked);
paperButton.addEventListener("click", paperClicked);
scissorsButton.addEventListener("click", scissorsClicked);

// console.log(clickedBoi);
