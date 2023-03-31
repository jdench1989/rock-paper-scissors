let computerValue = getComputerChoice ()

function getComputerChoice () {

    let a = Math.random()

    console.log(a)

    if (a<=1/3) { return "Rock"}
    else if (a>1/3 && a<=(1/3)*2) { return "Paper"}
    else { return "Scissors"}

}

console.log(computerValue)