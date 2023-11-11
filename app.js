var choices = ["rock", "paper", "scissor"];

var player_Choice = "";

var computerChoiceDiv = document.getElementById("computerSelection");

function getComputerChoice() {
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
  return computerChoice;
}

function getPlayerSelection(playerChoice) {
  player_Choice = playerChoice;
  var computerSelection = getComputerChoice();
  var h2 = document.createElement("h2");
  h2.textContent = "Computer Choice is " + `${computerSelection}`;
  computerChoiceDiv.innerHTML = "";
  computerChoiceDiv.appendChild(h2);
  playRound(player_Choice, computerSelection);
}

function playRound(playerSelection, computerSelection) {
  // if playerSelection is rock
  if (playerSelection === "rock" && computerSelection === "paper")
    alert("you lost!  rock beats paper");
  else if (playerSelection === "rock" && computerSelection === "scissor")
    alert("you won! scissor beats rock");
  // if playerSelection is paper
  else if (playerSelection === "paper" && computerSelection === "rock")
    alert("you won! paper beats rock");
  else if (playerSelection === "paper" && computerSelection === "scissor")
    alert("you lost! paper beats scissor");
  // if playerSelection is scissor
  else if (playerSelection === "scissor" && computerSelection === "paper")
    alert("you won! scissor beats paper");
  else if (playerSelection === "scissor" && computerSelection === "rock")
    alert("you lost! rock beats scissor");
  // if both equal
  else alert("It's a Tie");
}
