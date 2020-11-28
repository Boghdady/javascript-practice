'use strict';

let messageElement = document.querySelector('.message');
let scoreElement = document.querySelector('.score');
let numberElement = document.querySelector('.number');
let bodyElement = document.querySelector('body');
let guessElement = document.querySelector('.guess');

const secretNumber = Math.trunc(Math.random() * 20 + 1);



const checkScoreNumber = () => {
  let scoreResult = Number(document.querySelector('.score').textContent);
  if (scoreResult > 1) {
    scoreResult--
    scoreElement.textContent = scoreResult;
    return;
  }
  scoreElement.textContent = "Game Over";
  bodyElement.style.backgroundColor = 'red';
}

const correctGuess = (guess) => {
  numberElement.textContent = guess;
  messageElement.textContent = 'You Win 😎';
  bodyElement.style.backgroundColor = '#60b347';
  numberElement.style.width = '30rem';
}


document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess')
    .value);
  console.log(secretNumber)

  if (!guess) {
    messageElement.textContent = 'No Number found';

  } else if (guess === secretNumber) {
    correctGuess(guess);

  } else if (guess > secretNumber) {
    messageElement.textContent = 'Too High';
    checkScoreNumber();

  } else if (guess < secretNumber) {
    messageElement.textContent = 'too Low';
    checkScoreNumber();
  } else {
    number = guess;
  }
})

// Reset game
const resetGame = () => {
  numberElement.textContent = '?';
  scoreElement.textContent = "0";
  guessElement.value = '';
  messageElement.textContent = 'Start Guessing ..';
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem'
}

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});