
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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.trim();
    playerSelection = playerSelection.toLowerCase();

    //Normalize playerSelection
    dialogue="";
    playerSelectionNorm="";
    if(playerSelection.includes("rock") && playerSelection.length==4) {
        playerSelectionNorm="rock";
    } else if(playerSelection.includes("paper") && playerSelection.length==5) {
        playerSelectionNorm="paper";
    } else if(playerSelection.includes("scissors") && playerSelection.length==8) {
        playerSelectionNorm="scissors";
    } else {
        playerSelectionNorm="nah man";
    }

    switch (playerSelectionNorm) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    dialogue="It's a tie!";
                    break;
                case "paper":
                    dialogue="You lose! Paper beats rock.";
                    break;
                case "scissors":
                    dialogue="You win! Rock beats scissors.";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    dialogue="You win! Paper beats rock.";
                    break;
                case "paper":
                    dialogue="It's a tie!";
                    break;
                case "scissors":
                    dialogue="You lose! Scissors beats paper.";
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    dialogue="You lose! Rock beats scissors.";
                    break;
                case "paper":
                    dialogue="You win! Scissors beats paper.";
                    break;
                case "scissors":
                    dialogue="It's a tie!";
                    break;
            }
            break;
        default:

    }

    return dialogue;
}
   
const playerSelection = "  RoCK";
const computerSelection = getComputerChoice();
console.log(computerSelection + " " + playRound(playerSelection, computerSelection));