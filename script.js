"use strict";

//Generate Random Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Scores
let score = 20; //(inital score 20)
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const updateScore = function (score) {
  document.querySelector(".score").textContent = score;
};

//Comapre Users Guess to Secret Number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    displayMessage("No number!");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      updateScore(score);
    } else {
      displayMessage("You lost the game!");
      updateScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing");

  updateScore(score);

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
