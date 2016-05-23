////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();/* Your Expression */; // rock, paper, scissors
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();/* Your Expression */; //rock paper,scissors
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove){
        winner = "tie"
        console.log("We have a tie!");
    } else if (playerMove === "rock"){
        if (computerMove === "scissors"){
            winner = "player"
            console.log("Player Wins!");
        } else if (computerMove === "paper"){
            winner = "computer"
            console.log("Computer Wins");
        }
    } else if (playerMove === "scissors"){
        if (computerMove === "rock"){
            winner = "computer"
            console.log("Computer Wins!")
        } else if (computerMove === "paper"){
            winner = "player"
            console.log("Player Wins!")
        }
    } else if (playerMove === "paper"){
        if (computerMove === "rock"){
            winner = "player"
            console.log("Player Wins!")
        } else if (computerMove === "scissors"){
            winner = "computer"
            console.log("Computer Wins!")
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    while (playerWins < 5 && computerWins <5 ){
        var userMove = getPlayerMove();
        var compMove = getComputerMove();
        var playGame = getWinner(userMove,compMove);

        if (playGame == "player"){
            playerWins += 1;
            console.log('player +1');
        } else if(playGame == "computer"){
            computerWins += 1;
            console.log('comp +1');
        }
        console.log('player: ' + playerWins + ' , comp: ' + computerWins)
    }

    return [playerWins, computerWins];
}







