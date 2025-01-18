let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  if (randomChoice === 1) {
    return "scissor";
  } else if (randomChoice === 2) {
    return "rock";
  } else {
    return "paper";
  }
}

function getHumanChoice() {

  let myChoice = prompt("Enter your choice (rock, paper, or scissor):").toLowerCase();

  if (myChoice === "rock" || myChoice === "paper" || myChoice === "scissor") {
    return myChoice;
  } else {
    console.log("Invalid choice! Please enter rock, paper, or scissor.");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `It's a draw! You both chose ${humanChoice}.`;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore += 1;
    return `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore += 1;
    return `You lose this round! ${computerChoice} beats ${humanChoice}.`;
  }
}

function playGame() {
  let rounds = 5;
  for (let i = 0; i < rounds; i++) {
    console.log(`Round ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry you lost.");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
