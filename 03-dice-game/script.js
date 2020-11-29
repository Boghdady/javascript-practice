'use strict';

// Select elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, scores, activePlayer, gameIsFinished;
// Initial state
const initState = () => {
  currentScore = 0;
  scores = [0, 0]; // Initial scores for player 0 & 1
  activePlayer = 0; // Initial active player is player number0
  gameIsFinished = false;

  score0Element.textContent = 0;
  score1Element.textContent = 0;

  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add(['hidden']);

  player0Element.classList.remove(['player--winner']);
  player1Element.classList.remove(['player--winner']);

  player0Element.classList.add(['player--active']);
  player1Element.classList.remove(['player--active']);
}

initState();

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add(['hidden']);

const switchPlayer = () => {
  // Make current score for active user = 0, reset currentScore value
  document.getElementById(`current--${activePlayer}`)
    .textContent = 0;
  currentScore = 0;
  // Switch player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Change visual ui for active and inactive player
  // toggle method remove class if exist and add it if not exist
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (gameIsFinished) return;
  // 1) Generate a random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  // 2) Diplay dice element
  diceElement.classList.remove(['hidden']);
  diceElement.src = `img/dice-${diceNumber}.png`;

  // 3) Check if the diceNumber is 1, switch to next user
  if (diceNumber !== 1) {
    // Add diceNumber to the current score
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`)
      .textContent = currentScore;
  } else {
    switchPlayer();
  }
});

// Hold current score
btnHold.addEventListener('click', function () {
  if (gameIsFinished) return;
  // 1) add current score to active player score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`)
    .textContent = scores[activePlayer];
  // 2) check if active player score > 100 if true player won
  if (scores[activePlayer] > 20) {
    gameIsFinished = true;
    diceElement.classList.add(['hidden']);

    document.querySelector(`.player--${activePlayer}`)
      .classList.add(['player--winner']);
    document.querySelector(`.player--${activePlayer}`)
      .classList.remove(['player--active']);
  } else {
    // if less than 100 switch player
    switchPlayer();
  }
});

// Reset game
btnNew.addEventListener('click', initState);