let computerValue = getComputerChoice ()

let playerValue = prompt('Do you pick rock, paper or scissors?')

function getComputerChoice () {

    let a = Math.random()

    if (a<=1/3) { return "rock"}
    else if (a>1/3 && a<=(1/3)*2) { return "paper"}
    else { return "scissors"}

}
function singleRound () {

    let a = playerValue.toLowerCase()
    let b = computerValue

    console.log(a)
    console.log(b)

   if (a===b) { return "It's a tie!"}
   else if (a=='rock' && b=='paper') {return "Paper covers rock. You lose!"}
   else if (a=='rock' && b=='scissors') { return "Rock blunts scissors. You win!"}
   else if (a=='paper' && b=='rock') { return "Paper covers rock. You win!"}
   else if (a=='paper' && b=='scissors') { return "Scissors cut paper. You lose!"}
   else if (a=='scissors' && b=='rock') { return "Rock blunts scissors. You lose!"}
   else if (a=='scissors' && b=='paper') { return "Scissors cut paper. You win"}
   else { return 'Invalid entry. Try again.'}
}
console.log(singleRound())