"use strict";

let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".btn");
const resultsDiv = document.querySelector(".result");
const roundResult = document.createElement("p");
const gameResult = document.createElement("p");
const resetBtn = document.createElement("button");
resetBtn.textContent = "Again?";
resetBtn.classList.add("reset");
const computerIcon = document.querySelector(".computer-choice");

function playRound(humanChoice, computerChoice) {
  computerIcon.textContent =
    computerChoice === "rock" ? "✊" : computerChoice === "paper" ? "✋" : "✌️";

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (computerChoice === winConditions[humanChoice]) {
    humanScore++;
    return `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}.`;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame(e) {
  const humanSelection = e.target.id;
  const computerSelection = getComputerChoice();
  roundResult.textContent = `${playRound(
    humanSelection,
    computerSelection
  )} (${humanScore}:${computerScore})`;
  resultsDiv.appendChild(roundResult);

  if (humanScore + computerScore === 5) {
    buttons.forEach((elem) => (elem.disabled = true));
    console.log("disabled");
    if (humanScore === computerScore) {
      gameResult.textContent = `It's a tie! (${humanScore}:${computerScore})`;
      resultsDiv.appendChild(gameResult);
    } else if (humanScore > computerScore) {
      gameResult.textContent = `Player wins! (${humanScore}:${computerScore})`;
      resultsDiv.appendChild(gameResult);
    } else {
      gameResult.textContent = `Computer wins! (${computerScore}:${humanScore})`;
      resultsDiv.appendChild(gameResult);
    }
    resultsDiv.appendChild(resetBtn);
  }
}

resetBtn.addEventListener("click", () => {
  buttons.forEach((elem) => (elem.disabled = false));
  humanScore = 0;
  computerScore = 0;
  resultsDiv.removeChild(roundResult);
  resultsDiv.removeChild(gameResult);
  resultsDiv.removeChild(resetBtn);
});

buttons.forEach((elem) => {
  elem.addEventListener("click", playGame);
});
