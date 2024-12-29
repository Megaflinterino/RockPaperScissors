
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let a = (Math.random() * 100) + 1;

    console.log(a)

    if (a <= 33.333){
        let computerChoice = "rock"
        console.log(computerChoice)
        return "rock"
    }

    else if (a > 33.333 && a < 66.666){
        let computerChoice = "paper"
        console.log(computerChoice)
        return "paper"
    }

    else if (a > 66.666){
        let computerChoice = "scissors"
        console.log(computerChoice)
        return "scissors"
    }
}
//getHumanchoice noch case insensitive machen :rOcK PAPER scissORs
function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    console.log(humanChoice)

    if (humanChoice.toLowerCase() !== "rock" && humanChoice.toLowerCase() !== "paper" && humanChoice.toLowerCase() !== "scissors"){
        alert("Please Input only Rock, Paper or Scissors!")
    }

    return humanChoice
}

//Funktioniert nicht, gibt zwar die ersten logs aus aber die if schleifen lösen nicht aus, nächstes mal beheben.
function playRound(humanChoice, computerChoice){

    if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("funktioniert")
    }

    if (humanChoice === "rock" && computerChoice === "paper"){

    }

    if (humanChoice === "rock" && computerChoice === "scissors"){
        
    }



    if (humanChoice === "paper" && computerChoice === "rock"){
        
    }

    if (humanChoice === "paper" && computerChoice === "paper"){
        
    }

    if (humanChoice === "paper" && computerChoice === "scissors"){
        
    }



    if (humanChoice === "scissors" && computerChoice === "rock"){
        
    }

    if (humanChoice === "scissors" && computerChoice === "paper"){
        
    }

    if (humanChoice === "scissors" && computerChoice === "scissors"){
        
    }
}

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);