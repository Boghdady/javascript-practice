'use strict';

let messageElement = document.querySelector('.message');
let scoreElement = document.querySelector('.score');
let numberElement = document.querySelector('.number');
let bodyElement = document.querySelector('body');
let guessElement = document.querySelector('.guess');
let highscoreElement = document.querySelector('.highscore');

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;


const checkScoreNumber = (guess) => {
  let scoreResult = Number(document.querySelector('.score').textContent);
  if (scoreResult > 1) {
    scoreResult--
    scoreElement.textContent = scoreResult;
    guess > secretNumber ? messageElement.textContent = 'Too High' :
      messageElement.textContent = 'too Low';
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

const calcHighscore = () => {
  const score = Number(scoreElement.textContent);
  if (score > highscore) {
    highscore = score;
    highscoreElement.textContent = highscore;
  }
}


document.querySelector('.check')
  .addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess')
      .value);
    console.log(secretNumber)

    if (!guess) {
      messageElement.textContent = 'No Number found';
    } else if (guess === secretNumber) {
      correctGuess(guess);
      calcHighscore();
    } else if (guess !== secretNumber) {
      checkScoreNumber(guess);
    } else {
      number = guess;
    }
  });

// Reset game
const resetGame = () => {
  numberElement.textContent = '?';
  scoreElement.textContent = "20";
  guessElement.value = '';
  messageElement.textContent = 'Start Guessing ..';
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem'
}

document.querySelector('.again')
  .addEventListener('click', function () {
    resetGame();
  });