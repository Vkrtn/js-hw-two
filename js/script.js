let start = document.querySelector(".button");
let getStart = document.querySelector(".play");
let userOnescore = 0;
let userTwoscore = 0;
let score = 0;
const totalScore = { computerScore: 0, playerScore: 0 };

start.onclick = function (event) {
  getStart.classList.toggle("active");
};

function getCompChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    score += 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score++;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score++;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score++;
  } else {
    score--;
  }

  return score;
}

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result"); // Remove the period
  const handsDiv = document.getElementById("hands"); // Remove the period
  const playerScore = document.getElementById("player-score"); // Remove the period

  if (score == 1) {
    resultDiv.innerText = "You Won!";
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie!";
  } else {
    resultDiv.innerText = "You Lose!";
  }

  handsDiv.innerText = 'Player:${playerChoice} Computer:${computerChoice}'
}

function onClickRPS(playerChoice) {
  console.log({ playerChoice });

  const computerChoice = getCompChoice();
  console.log({ computerChoice });

  const localScore = getResult(playerChoice, computerChoice); // Use a different name for the local variable
  totalScore["playerScore"] += localScore;
  console.log({ localScore });
  console.log(totalScore);
  showResult(localScore, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
}

playGame();
