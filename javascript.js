
// Randomly return "Rock", "Paper", "Scissors"
function getComputerChoice() {
    rand0to3 = Math.floor(Math.random() * 3);   //Randomly returns 0 to 2
    choice = "";
    switch (rand0to3) {
        case 0:
            choice = "rock";
            compRock.style.backgroundColor = "cornflowerblue";
            compPaper.style.backgroundColor = "white";
            compScissors.style.backgroundColor = "white";
            break;
        case 1:
            choice = "paper";
            compRock.style.backgroundColor = "white";
            compPaper.style.backgroundColor = "cornflowerblue";
            compScissors.style.backgroundColor = "white";            
            break;
        case 2:
            choice = "scissors";
            compRock.style.backgroundColor = "white";
            compPaper.style.backgroundColor = "white";
            compScissors.style.backgroundColor = "cornflowerblue";
            break;
    }
    return choice;
}

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

    // additionalDialogue = `You chose ${playerSelection}. The computer chose ${computerSelection}.\n`;
    // return additionalDialogue + dialogue;
    return dialogue;
}

let isClicked = (e) => {
    const buttonElement = e.target.closest(".circle");
    const playerClicked = buttonElement.id;     //returns 'rock', 'paper', or 'scissors'

    const result = playRound(playerClicked, getComputerChoice());
    speechBubble.textContent = result;


    if (result.includes("win")) {
        playerPointNum++;
        yourPoints.textContent = `Your Points: ${playerPointNum}`;
    } else if (result.includes("lose")) {
        computerPointNum++;
        computerPoints.textContent = `Computer\'s Points: ${computerPointNum}`;
    }

    if (playerPointNum == 5) {
        speechBubble.textContent += `\nCongratulations! You won 5 rounds!\nYour points: ${playerPointNum},\nComputer's points: ${computerPointNum}`;
        playerPointNum = 0;
        computerPointNum = 0;
        yourPoints.textContent = `\nYour Points: ${playerPointNum}`;
        computerPoints.textContent = `\nComputer\'s Points: ${computerPointNum}`;
        
    } else if (computerPointNum == 5) {
        speechBubble.textContent += `\nYou lost 5 rounds! Better luck next time.\nYour points: ${playerPointNum},\nComputer's points: ${computerPointNum}`;
        playerPointNum = 0;
        computerPointNum = 0;
        yourPoints.textContent = `\nYour Points: ${playerPointNum}`;
        computerPoints.textContent = `\nComputer\'s Points: ${computerPointNum}`;
        
    }
};

let playerPointNum = 0;
let computerPointNum = 0;

const circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
    circle.addEventListener("click", isClicked);
});

const speechBubble = document.querySelector(".speech-bubble");
const yourPoints = document.querySelector(".your-points");
const computerPoints = document.querySelector(".computer-points");
const compRock = document.querySelector(".rock");
const compPaper = document.querySelector(".paper");
const compScissors = document.querySelector(".scissors");

