'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i].textContent)
}