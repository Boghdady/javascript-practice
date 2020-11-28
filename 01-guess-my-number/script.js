'use strict';

let messageElement = document.querySelector('.message');
let scoreElement = document.querySelector('.score');
let numberElement = document.querySelector('.number');
let bodyElement = document.querySelector('body');

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let scoreResult = Number(document.querySelector('.score').textContent);



const checkScoreNumber = () => {}


document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess')
    .value);
  console.log(secretNumber)
  if (!guess) {
    messageElement.textContent = 'No Number found';
  } else if (guess === secretNumber) {
    numberElement.textContent = guess;
    messageElement.textContent = 'You Win 😎';
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
  } else if (guess > secretNumber) {
    messageElement.textContent = 'Too High';
    console.log(scoreResult)
    if (scoreResult > 1) {
      scoreResult--
      scoreElement.textContent = scoreResult;
      return;
    }
    scoreElement.textContent = "Game Over";
  } else if (guess < secretNumber) {
    messageElement.textContent = 'too Low';
    if (scoreResult > 1) {
      scoreResult--
      scoreElement.textContent = scoreResult;
      return;
    }
    scoreElement.textContent = "Game Over";
    bodyElement.style.backgroundColor = 'red';
  } else {
    number = guess;
  }
})