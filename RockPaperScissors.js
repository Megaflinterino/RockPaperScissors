
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let a = (Math.random() * 100) + 1

    console.log(a)

    if (a <= 33.333){
        let computerChoice = "rock"
        return "rock"
    }

    else if (a > 33.333 && a < 66.666){
        let computerChoice = "paper"
        return "paper"
    }

    else if (a > 66.666){
        let computerChoice = "scissors"
        return "scissors"
    }
}
//getHumanchoice noch case insensitive machen :rOcK PAPER scissORs
function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");

    if (humanChoice.toLowerCase() !== "rock" && humanChoice.toLowerCase() !== "paper" && humanChoice.toLowerCase() !== "scissors"){
        alert("Please Input only Rock, Paper or Scissors!")
    }

    return humanChoice
}

//Funktioniert nicht, gibt zwar die ersten logs aus aber die if schleifen lösen nicht aus, nächstes mal beheben.
function playRound(humanChoice, computerChoice){


    console.log(humanChoice)
    console.log(computerChoice)

    if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("Even!")
    }

    if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose, Paper Beats Rock!")
        computerScore++;
    }

    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win, Rock beats Scissors!")
        humanScore++     
    }



    if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Win Paper Beats Rock")
        humanScore++     

    }

    if (humanChoice === "paper" && computerChoice === "paper"){
        console.log("Even!")
    }

    if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You Lose Scissors beats Paper!")
        computerScore++;
    }



    if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You Lose Rock Beats Scissors!")
        computerScore++;
    }

    if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win Scissors Beats Paper!")
        humanScore++     

    }

    if (humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("Even!")
    }
    console.log("Youre Points:", humanScore, "Comp. Points:", computerScore)
}

function playGame(playRound){

    for (let i = 0; i < 5; i++){
        playRound(humanSelection, computerSelection)
    }
}

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

playGame(playRound)