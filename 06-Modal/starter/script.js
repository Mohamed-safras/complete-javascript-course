'use strict';

const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

closeModal.addEventListener('click', hideModal);
document.addEventListener('keydown', keyControll);
overlay.addEventListener('click', hideModal);

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function keyControll(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  } else if (
    (event.key === 'a' || event.key === 'A') &&
    modal.classList.contains('hidden')
  ) {
    openModal();
  }
}

// for (let i of showModal) {
//   i.addEventListener('click', () => {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

// showModal.forEach(item => {
//   item.addEventListener('click', () => {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// });
