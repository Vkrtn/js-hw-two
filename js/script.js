const startButton = document.querySelector(".button");
const playArea = document.querySelector(".play");
let playerScore = 0;
let computerScore = 0;
let resultDiv, handsDiv;

startButton.addEventListener("click", function () {
  playArea.classList.toggle("active");
});

function getCompChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

function getResult(playerChoice, computerChoice) {
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    updatePlayerScore();
  } else if (playerChoice !== computerChoice) {
    computerScore++;
  }
}

function showResult(playerChoice, computerChoice) {
  resultDiv = document.getElementById("result");
  handsDiv = document.getElementById("hands");

  if (playerScore > computerScore) {
    resultDiv.innerText = "You Win!";
  } else if (playerScore < computerScore) {
    resultDiv.innerText = "Computer Wins!";
  } else {
    resultDiv.innerText = "It's a Tie!";
  }

  handsDiv.innerText = `Player: ${playerChoice} -- Computer: ${computerChoice}`;
}

function updatePlayerScore() {
  const playerScoreDiv = document.getElementById("player-score");
  playerScoreDiv.innerText = `Player Score: ${playerScore}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getCompChoice();
  getResult(playerChoice, computerChoice);
  showResult(playerChoice, computerChoice);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updatePlayerScore();
  resultDiv.innerText = "";
  handsDiv.innerText = "";
}

const endGameButton = document.getElementById("endGameButton");
endGameButton.addEventListener("click", resetGame);

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");

  rpsButtons.forEach((rpsButton) => {
    rpsButton.addEventListener("click", () => onClickRPS(rpsButton.value));
  });
}

playGame();
