    let playerScore = 0;
    let computerScore = 0;

function getComputerChoice(){
    let option = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3);
    return option[index];
    
}

function playerSelection(){
    let choice = prompt("rock, paper or scissors : ")
    return choice;
}

game();

function game(){
    let playerChoice;
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = playerSelection();
        rpc(playerChoice, computerChoice);  
    }

    if (computerScore > playerScore){
        console.log("You've lost the round");
    }
    else if(computerScore< playerScore){
        console.log("Hurray! You won the round");
    }
    else{
        console.log("The round has been tied!");
    }
}


function rpc(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}!`);
        computerScore++;
        scoreUpdate();
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}!`);
        computerScore++;
        scoreUpdate();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}!`);
        computerScore++;
        scoreUpdate();
    } else if (playerSelection === computerSelection) {
        console.log("It's a draw!");
        scoreUpdate();
    } else {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`) ;
        playerScore++;
        scoreUpdate();
    }
}

function scoreUpdate(){
        console.log(`Player- ${playerScore} \t Computer- ${computerScore}`);
}

