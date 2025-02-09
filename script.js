"use strict";

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
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

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors").toLowerCase();
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    if (["rock", "paper", "scissors"].includes(humanSelection)) {
      const computerSelection = getComputerChoice();
      alert(playRound(humanSelection, computerSelection));
    } else {
      alert(
        "Invalid choice, please enter rock, paper, or scissors. Repeating round..."
      );
      i--; // Decrement i to repeat the round
    }
  }

  if (humanScore === computerScore) {
    alert(`It's a tie! (${humanScore}:${computerScore})`);
  } else if (humanScore > computerScore) {
    alert(`Player wins! (${humanScore}:${computerScore})`);
  } else {
    alert(`Computer wins! (${computerScore}:${humanScore})`);
  }
}

playGame();
