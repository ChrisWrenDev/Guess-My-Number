"use strict";

//Generate Random Secret Number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

//Comapre Users Guess to Secret Number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High!";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low!";
  }
});
