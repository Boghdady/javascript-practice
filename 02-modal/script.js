'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove(['hidden']);
  overlay.classList.remove(['hidden']);
}

const closeModal = function () {
  modal.classList.add(['hidden']);
  overlay.classList.add(['hidden']);
}

// Show modal
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

// 1) Close modal when click close botton
btnCloseModal.addEventListener('click', closeModal);

// 2) Close modal when click on overlay
overlay.addEventListener('click', closeModal);

// 3) Close modal when click "Esc" key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})