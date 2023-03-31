let playerScore = 0
let computerScore = 0

function getComputerChoice () {
    let a = Math.random();
    if (a<=1/3) { return "rock"}
    else if (a>1/3 && a<=(1/3)*2) { return "paper"}
    else { return "scissors"};
};

function playRound () {

    const computerValue = getComputerChoice ();
    const playerValue = prompt('Do you pick rock, paper or scissors?').toLowerCase();
    const a = playerValue;
    const b = computerValue;

   if (a===b) { return "Tie!"}
   else if (a=='rock' && b=='paper') { computerScore++; return "Paper covers rock. You lose!"}
   else if (a=='rock' && b=='scissors') { playerScore++; return "Rock blunts scissors. You win!"}
   else if (a=='paper' && b=='rock') { playerScore++; return "Paper covers rock. You win!"}
   else if (a=='paper' && b=='scissors') { computerScore++; return "Scissors cut paper. You lose!"}
   else if (a=='scissors' && b=='rock') { computerScore++; return "Rock blunts scissors. You lose!"}
   else if (a=='scissors' && b=='paper') { playerScore++; return "Scissors cut paper. You win"}
   else { return 'Invalid entry. Try again.'};
};

function game() {
    for (let round=1;round<=5;round++) {
        console.log("Round" + round + ":" + playRound())
    }
    console.log('The player scored: ' + playerScore)
    console.log('The computer scored: ' + computerScore)

    if (playerScore>computerScore) {console.log("Player wins!")}
    if (playerScore<computerScore) {console.log("Computer wins!")}
    if (playerScore===computerScore) {console.log("It's a tie! Try again.")}
}

game()