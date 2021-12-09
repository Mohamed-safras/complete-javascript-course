'use strict';

const number = document.querySelector('.number');
const guessContent = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');
const scoreContent = document.querySelector('.score');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const message = document.querySelector('.message');

let score = 20;
let randomNumber = Math.floor(Math.random() * 20) + 1;

check.addEventListener('click', function () {
  number.textContent = randomNumber;
  const guessValue = guessContent.value;

  console.log(guessValue);
});
