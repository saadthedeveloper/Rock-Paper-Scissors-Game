// =========================
// DOM Elements
// =========================
const choices = document.querySelectorAll(".choice");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#computer-score");
const messageBox = document.querySelector("#message-container");

// =========================
// Game State
// =========================
let userScore = 0;
let computerScore = 0;
let userWin = true;

// =========================
// Utility: Get Computer Choice
// =========================
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
}

// =========================
// Main Game Logic
// =========================
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    const computerChoice = getComputerChoice();

    console.log(`User: ${userChoice} | Computer: ${computerChoice}`);

    if (computerChoice === userChoice) {
      // Draw
      messageBox.innerText = `It's A Draw\n\nComputer Chose ${computerChoice}`;
    } else if (
      (computerChoice === "rock" && userChoice === "scissors") ||
      (computerChoice === "paper" && userChoice === "rock") ||
      (computerChoice === "scissors" && userChoice === "paper")
    ) {
      // User loses
      userWin = false;
      computerScore++;
      messageBox.innerText = `You Lose!\n\nComputer Chose ${computerChoice}`;
    } else {
      // User wins
      userWin = true;
      userScore++;
      messageBox.innerText = `You Win!\n\nComputer Chose ${computerChoice}`;
    }

    // Update scores
    cScore.innerText = computerScore;
    uScore.innerText = userScore;
  });
});
