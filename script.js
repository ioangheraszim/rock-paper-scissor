const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const container = document.querySelector(".container");
let pc = document.querySelector(".pc_score");
let meScore = document.querySelector(".human_score");

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

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    const para = document.createElement("p");

    para.textContent = `It's a draw! You both chose ${humanChoice}.`;
    container.appendChild(para);
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore += 1;
    meScore.textContent = humanScore;
    const para = document.createElement("p");
    para.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    container.appendChild(para);

  } else {
    const para = document.createElement("p");
    para.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`
    container.appendChild(para);

    computerScore += 1;
    pc.textContent = computerScore;
  }

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      const winnerMessage = document.createElement("h1");
      winnerMessage.textContent = "Congrats, you won!";
      container.appendChild(winnerMessage);
    } else {
      const winnerMessage = document.createElement("h1");
      winnerMessage.textContent = "You lost :(";
      container.appendChild(winnerMessage);
    }

    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
  }

}


rock.addEventListener("click", () => {
  const computerChoice = getComputerChoice(); 
  playRound("rock", computerChoice); 
});

paper.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
});

scissor.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("scissor", computerChoice);
});
