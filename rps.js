// const { doc } = require("prettier");

var playerWon = 0;
var computerWon = 0;

const introText = "Rock Paper Scissors";
var playingComp = document.querySelector(".playingComp");
var mainComp = document.querySelector(".mainComp");
function displayMain() {
  var introComp = document.querySelector(".introComp");
  introComp.style.display = "none";
  mainComp.style.display = "flex";
}

$(document).ready(async function () {
  carousel(introText, "#intro-text");
  mainComp.style.display = "none";
});

async function typeSentence(introText, textRef, delay = 100) {
  const letters = introText.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(textRef).append(letters[i]);
    i++;
  }
  return;
}

async function carousel(introText, textRef) {
  updateFontColor(textRef, "#66fcf1");
  await typeSentence(introText, textRef);
  await waitForMs(1500);
}

function updateFontColor(textRef, color) {
  $(textRef).css("color", color);
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function removeinfo() {
  var info = document.querySelector("#info");
  info.style.display = "none";
}
var computerSelection = "";

function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  console.log("computer_selection is " + computerSelection);

  return computerSelection;
}

function displayComputerChoice() {
  var svgText = "";
  if (computerSelection == "rock") {
    svgText = "./svgs/rock-svgrepo-com.svg";
  } else if (computerSelection == "paper") {
    svgText = "./svgs/paper-svgrepo-com (2).svg";
  } else {
    svgText = "./svgs/scissors-svgrepo-com (1).svg";
  }
  // var svg = document.createElementNS("", "img");
  BossChoiceimg.src = svgText;
  BossChoiceimg.setAttribute("width", "100");
  BossChoiceimg.setAttribute("height", "100");

  BossChoiceScore.textContent = "  Boss Score : " + computerWon;
}

var playerSelection = "";
function getPlayerChoice(ch) {
  playerSelection = ch;

  console.log("\n", "player_selection is " + playerSelection);
  return playerSelection;
}

function displayPlayerChoice() {
  var svgText1 = "";
  if (playerSelection == "rock") {
    svgText1 = "./svgs/rock-svgrepo-com.svg";
  } else if (playerSelection == "paper") {
    svgText1 = "./svgs/paper-svgrepo-com (2).svg";
  } else {
    svgText1 = "./svgs/scissors-svgrepo-com (1).svg";
  }
  // var svg = document.createElementNS("", "img");
  playerChoiceimg.src = svgText1;
  playerChoiceimg.setAttribute("width", "100");
  playerChoiceimg.setAttribute("height", "100");

  playerChoiceScore.textContent = "Player Score : " + playerWon;
}

function playRound() {
  let computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    // prompt("It's a tie");
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    // prompt('...YOU WON...'+${playerSelection}+" "+'beats'+" "+ ${computerSelection});
    playerWon++;
  } else {
    //prompt('..YOU LOST!'+${computerSelection}+" " +'beats'+" "+ ${playerSelection});
    computerWon++;
  }
  displayPlayerChoice();
  displayComputerChoice();
  if (playerWon == 5) {
    alert("...Hurray YOU WON....");
    playerWon = 0;
    computerWon = 0;
    displayPlayerChoice();
    displayComputerChoice();
    return;
  } else if (computerWon == 5) {
    alert("Oh...YOU LOST!...");
    playerWon = 0;
    computerWon = 0;
    displayPlayerChoice();
    displayComputerChoice();
    return;
  }
}

var playerChoiceimg = document.querySelector(".playerChoiceimg");
var BossChoiceimg = document.querySelector(".BossChoiceimg");
var playerChoiceScore = document.querySelector("#playerChoiceScore");
var BossChoiceScore = document.querySelector("#BossChoiceScore");
