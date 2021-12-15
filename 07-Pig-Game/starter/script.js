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
const btnNew = document.querySelector('.btn--new');

let current_score, total_scores, current_player, isPlaying;
const info = () => {
  current_score = 0;
  total_scores = [0, 0];
  current_player = 0;
  isPlaying = true;

  dice.classList.add('hide');
  score__0El.textContent = 0;
  score__1El.textContent = 0;
};

info();

btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    displayDice(randomDice);
  }
});

btnHold.addEventListener('click', () => {
  if (isPlaying) {
    total_scores[current_player] += current_score;
    document.querySelector(`#score--${current_player}`).textContent =
      total_scores[current_player];

    if (total_scores[current_player] >= 100) {
      isPlaying = false;
      document
        .querySelector(`.player--${current_player}`)
        .classList.add('player--winner');
      document.querySelector(`#current--${current_player}`).textContent = 0;
      document
        .querySelector(`.player--${current_player}`)
        .classList.remove('player--active');
      dice.classList.add('hide');
    } else {
      switchPlayer();
      dice.classList.add('hide');
    }
  }
});

function displayDice(random) {
  if (random !== 1) {
    showDice(random);
    current_score += random;
    document.querySelector(`#current--${current_player}`).textContent =
      current_score;
  } else {
    showDice(random);

    switchPlayer();
  }
}

function showDice(random) {
  dice.classList.remove('hide');
  dice.src = `dice-${random}.png`;
}

function switchPlayer() {
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

btnNew.addEventListener('click', function () {
  info();

  player__0.classList.remove('player--winner');
  player__1.classList.remove('player--winner');
  current__0El.textContent = current_score;
  current__1El.textContent = current_score;
  player__0.classList.add('player--active');
  player__1.classList.remove('player--active');

  name__0.classList.add('player--active');
  name__1.classList.remove('player--active');
  score__0El.classList.add('player--active');
  score__1El.classList.remove('player--active');
});
