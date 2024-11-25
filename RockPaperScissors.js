

function getComputerChoice(){
    let a = (Math.random() * 100) + 1;

    if (a <= 33){
        console.log("Rock")
    }

    else if (a > 34 && a < 66){
        console.log("Paper")
    }

    else if (a > 66){
        console.log("Scissors")
    }

}

console.log(getComputerChoice())