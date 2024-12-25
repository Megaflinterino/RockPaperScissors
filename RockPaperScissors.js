
let humanScore = 0
let cumputerScore = 0

function getComputerChoice(){
    let a = (Math.random() * 100) + 1;

    console.log(a)

    if (a <= 33.333){
        let computerChoice = "rock"
        console.log(computerChoice)
    }

    else if (a > 33.333 && a < 66.666){
        let computerChoice = "paper"
        console.log(computerChoice)
    }

    else if (a > 66.666){
        let computerChoice = "scissors"
        console.log(computerChoice)
    }
}
//getHumanchoice noch case insensitive machen :rOcK PAPER scissORs
function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    console.log(humanChoice)

    if (humanChoice.toLowerCase() !== "rock" && humanChoice.toLowerCase() !== "paper" && humanChoice.toLowerCase() !== "scissors"){
        alert("Please Input only Rock, Paper or Scissors!")
    }
}

//Funktioniert nicht, gibt zwar die ersten logs aus aber die if schleifen lösen nicht aus, nächstes mal beheben.
function playRound(humanChoice, computerChoice){

    console.log("ab Hier playRound")
    humanChoice =="rock"
    computerChoice == "rock"

    if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("Even")
    }

    if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock")
    }

    if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Won! Rock beats Scissors.")
    }



    if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Won! Paper beats Rock.")
    }

    if (humanChoice == "paper" && computerChoice == "paper"){
        console.log("Even!")
    }

    if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You Lose! Scissors beats Paper")
    }



    if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You Lose! Rock beats Scissors.")
    }

    if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win! Scissors beats Paper")
    }

    if (humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("Even!")
    }

    else{
    }
    }


console.log(playRound())