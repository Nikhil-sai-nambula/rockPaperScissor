var playerWon = 0;
var computerWon = 0;

const introText = "Rock Paper Scissors";
var playingComp = document.querySelector(".playingComp");
var mainComp = document.querySelector(".mainComp");
function displayMain() {
  var introComp = document.querySelector(".introComp");
  introComp.style.display = "none";
  mainComp.style.display = "flex";
  winnerModal.style.display = "none";
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

var currentStatus = document.querySelector("#currentStatus");
function playRound() {
  let computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    currentStatus.textContent = "It's a tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    currentStatus.textContent =
      "You Won " + playerSelection + " " + "beats" + " " + computerSelection;
    playerWon++;
  } else {
    currentStatus.textContent =
      "You Lost " + computerSelection + " beats " + playerSelection;
    computerWon++;
  }
  displayPlayerChoice();
  displayComputerChoice();
  if (playerWon == 5) {
    winnerImg.src = "./svgs/happy-filled-face-svgrepo-com.svg";
    winnerText.textContent = "You won";
    playWinSound();
    displayModal();
    toggleBlur();
    // playerWon = 0;
    // computerWon = 0;
    displayPlayerChoice();
    displayComputerChoice();
    return;
  } else if (computerWon == 5) {
    winnerImg.src = "./svgs/sad-black-emoticon-face-svgrepo-com.svg";
    winnerText.textContent = "You Lost!";
    playLostSound();
    displayModal();
    toggleBlur();
    // playerWon = 0;
    // computerWon = 0;
    displayPlayerChoice();
    displayComputerChoice();
    return;
  }
}

var playerChoiceimg = document.querySelector(".playerChoiceimg");
var BossChoiceimg = document.querySelector(".BossChoiceimg");
var playerChoiceScore = document.querySelector("#playerChoiceScore");
var BossChoiceScore = document.querySelector("#BossChoiceScore");

function playClickSound() {
  let audio = new Audio("./audio/mixkit-cool-interface-click-tone-2568.wav");
  audio.play();
}

function playWinSound() {
  let audio = new Audio("./audio/smb_world_clear.wav");
  audio.play();
}

function playLostSound() {
  let audio = new Audio("./audio/smb_mariodie.wav");
  audio.play();
}

var winnerModal = document.querySelector("#winnerModal");
var winnerImg = document.querySelector("#winnerImg");
var winnerText = document.querySelector("#winnerText");

function displayModal() {
  winnerModal.style.display = "flex";
}

function toggleBlur() {
  var body = document.querySelector("body");
  body.classList.add("blurry-effect");
  mainComp.classList.add("blurry-effect");
}

function resetGame() {
  playerWon = 0;
  computerWon = 0;
  displayPlayerChoice();
  displayComputerChoice();
  closeModal();
}
function closeModal() {
  winnerModal.style.display = "none";
}
