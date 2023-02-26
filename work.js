    let playerScore = 0;
    let computerScore = 0;

const choices = document.querySelectorAll('.btn');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
const round = document.querySelector('.round');

getPlayerChoice();

function getComputerChoice(){
    let option = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3);
    return option[index];
    
}


function getPlayerChoice(){
    choices.forEach(choice => {
        choice.addEventListener('click', () =>{
            game(choice.textContent);
        })
    });
}




function game(playerChoice){

    
        computerChoice = getComputerChoice();
        rpc(playerChoice, computerChoice);  
    

    if (computerScore > playerScore){
        round.textContent = "You've lost the round";
    }
    else if(computerScore< playerScore){
        round.textContent = "Hurray! You won the round";
    }
    else{
        round.textContent = "The round has been tied!";
    }
}


function rpc(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = `You lost! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
        scoreUpdate();
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result.textContent = `You lost! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
        scoreUpdate();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result.textContent = `You lost! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
        scoreUpdate();
    } else if (playerSelection === computerSelection) {
        result.textContent = "It's a draw!";
        scoreUpdate();
    } else {
        result.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        scoreUpdate();
    }
}

function scoreUpdate(){
        score.textContent = `Player- ${playerScore} \t Computer- ${computerScore}`;
}

 


