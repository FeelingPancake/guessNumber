'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const inputValue = Number(document.querySelector('.number-input').value);

  if (!inputValue) {
    document.querySelector('.guess-message').textContent = 'Input Number!';
  } else if (inputValue > secretNumber && inputValue <= 20) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  } else if (inputValue === secretNumber) {
    if (score > 0) {
      document.querySelector('.guess-message').textContent = 'You are right!!!';
    }
  } else if (inputValue < secretNumber && inputValue > 0) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  } else if (inputValue < 0 || inputValue > 20) {
    document.querySelector('.guess-message').textContent =
      'Not between 1 to 20';
  }
});
