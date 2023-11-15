var playerWon = 0;
var computerWon = 0;

function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  console.log("computer_selection is " + computerSelection);
  return computerSelection;
}

function getPlayerChoice() {
  let playerSelection = prompt("select an item");
  console.log("\n", "player_selection is " + playerSelection);
  return playerSelection;
}

function playRound() {
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice();
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    prompt("It's a tie");
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    //prompt('...YOU WON...'+${playerSelection}+" "+'beats'+" "+ ${computerSelection});
    playerWon++;
  } else {
    //prompt('..YOU LOST!'+${computerSelection}+" " +'beats'+" "+ ${playerSelection});
    computerWon++;
  }
}

function game() {
  while (playerWon != 5 && computerWon != 5) {
    playRound();
  }
  if (playerWon == 5) {
    alert("...Hurray YOU WON....");
    return;
  } else {
    prompt("Oh...YOU LOST!...");
    return;
  }
}
