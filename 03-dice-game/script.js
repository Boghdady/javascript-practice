'use strict';

// Select elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial state
let currentScore = 0;
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add(['hidden']);


// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1) Generate a random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);

  // 2) Diplay dice element
  diceElement.classList.remove(['hidden']);
  diceElement.src = `img/dice-${diceNumber}.png`;

  // 3) Check if the diceNumber is 1, switch to next user
  if (diceNumber !== 1) {
    // Add diceNumber to the current score
    currentScore += diceNumber;
    current0Element.textContent = currentScore;
  }
});