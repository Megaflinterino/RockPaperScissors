
let humanScore = 0
let cumputerScore = 0

function getComputerChoice(){
    let a = (Math.random() * 100) + 1;

    console.log(a)

    if (a <= 33.333){
        let computerChoice = "Rock"
        console.log(computerChoice)
    }

    else if (a > 33.333 && a < 66.666){
        let computerChoice = "Paper"
        console.log(computerChoice)
    }

    else if (a > 66.666){
        let computerChoice = "Scissors"
        console.log(computerChoice)
    }
}
//getHumanchoice noch case insensitive machen :rOcK PAPER scissORs
function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    console.log(humanChoice)

    if (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors"){
        alert("Please Input only Rock, Paper or Scissors!")
    }
}

function playRound(humanChoice, computerChoice){}

console.log(getComputerChoice())
console.log(getHumanChoice())