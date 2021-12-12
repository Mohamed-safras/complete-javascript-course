'use strict';
//select html elements
const score__0El = document.querySelector('#score--0');
const score__1El = document.querySelector('#score--1');
const current__0El = document.querySelector('#current--0');
const current__1El = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const player__0 = document.querySelector('.player--0');
const player__1 = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const name__0 = document.querySelector('#name--0');
const name__1 = document.querySelector('#name--1');
const btnHold = document.querySelector('.btn--hold');

score__0El.textContent = 0;
score__1El.textContent = 0;

let current_score = 0;

let total_scores = [0, 0];

let current_player = 0;

dice.classList.add('hide');

btnRoll.addEventListener('click', function () {
  let randomDice = Math.floor(Math.random() * 6) + 1;
  displayDice(randomDice);
});

btnHold.addEventListener('click', () => {
  total_scores[current_player] += current_score;
  document.querySelector(`#score--${current_player}`).textContent =
    total_scores[current_player];
  changePlayer();
  dice.classList.add('hide');
});

function displayDice(random) {
  if (random !== 1) {
    showDice(random);
    current_score += random;
    document.querySelector(`#current--${current_player}`).textContent =
      current_score;
  } else {
    showDice(random);
    changePlayer();
  }
}

function showDice(random) {
  dice.classList.remove('hide');
  dice.src = `dice-${random}.png`;
}

function changePlayer() {
  document.querySelector(`#current--${current_player}`).textContent = 0;
  current_player = current_player === 0 ? 1 : 0;
  current_score = 0;

  player__0.classList.toggle('player--active');
  player__1.classList.toggle('player--active');
  score__0El.classList.toggle('player--active');
  score__1El.classList.toggle('player--active');
  name__0.classList.toggle('player--active');
  name__1.classList.toggle('player--active');
}
