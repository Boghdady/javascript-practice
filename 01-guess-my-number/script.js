'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let message = document.querySelector('.message');
let scoreResult = Number(document.querySelector('.score').textContent);
let scoreElement = document.querySelector('.score');
let number = document.querySelector('.number');

const checkScoreNumber = () => {}




document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess')
    .value);
  number.textContent = secretNumber;
  if (!guess) {
    message.textContent = 'No Number found';
  } else if (guess > secretNumber) {
    message.textContent = 'Too High';
    console.log(scoreResult)
    if (scoreResult > 1) {
      scoreResult--
      scoreElement.textContent = scoreResult;
      return;
    }
    scoreElement.textContent = "Game Over";
  } else if (guess < secretNumber) {
    message.textContent = 'too Low';
    if (scoreResult > 1) {
      scoreResult--
      scoreElement.textContent = scoreResult;
      return;
    }
    scoreElement.textContent = "Game Over";
  } else {
    number = guess;
  }
})