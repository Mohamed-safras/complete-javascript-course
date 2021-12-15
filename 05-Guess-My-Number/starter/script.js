'use strict';

const number = document.querySelector('.number');
const guessContent = document.querySelector('.guess');
const highScoreContent = document.querySelector('.highscore');
const scoreContent = document.querySelector('.score');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const message = document.querySelector('.message');

let score = 20;
let highScore = 0;
let randomNumber = Math.floor(Math.random() * 20) + 1;
check.addEventListener('click', function () {
  const guessValue = Number(guessContent.value);

  if (!guessValue) {
    message.textContent = 'No Number';
  } else if (guessValue !== randomNumber) {
    if (score < 1) {
      message.textContent = 'You lost the game';
      scoreContent.textContent = 0;
    } else {
      message.textContent = `Guess value is too ${
        guessValue > randomNumber ? 'high' : 'low'
      } `;
      score--;
      scoreContent.textContent = score;
    }
  } else if (guessValue === randomNumber) {
    number.textContent = randomNumber;
    message.textContent = 'You won the game';
    document.body.style.backgroundColor = '#60b347';
    guessContent.style.display = 'none';
    check.style.display = 'none';
    if (score > highScore) {
      highScore = score;
      highScoreContent.textContent = highScore;
    }
  }
});

again.addEventListener('click', function () {
  guessContent.style.display = 'block';
  check.style.display = 'block';
  guessContent.value = '';
  document.body.style.background = '#222';
  message.textContent = 'Start guessing...';
  score = 20;
  scoreContent.textContent = score;
  number.textContent = '?';
  randomNumber = Math.floor(Math.random() * 20) + 1;
});
