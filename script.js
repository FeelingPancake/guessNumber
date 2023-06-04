'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const inputValue = Number(document.querySelector('.number-input').value);

  // NaN
  if (!inputValue) {
    document.querySelector('.guess-message').textContent = 'Input Number!';
  }
  // Too high number
  else if (inputValue > secretNumber && inputValue <= 20) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
    // Player Win
  } else if (inputValue === secretNumber) {
    if (score > 0) {
      document.querySelector('.guess-message').textContent = 'You are right!!!';
      document.querySelector('.question').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#deb887';
      document.querySelector('.question').style.width = '70rem';
      document.querySelector('.question').style.color = 'lawngreen';
    }
  }
  // Too low number
  else if (inputValue < secretNumber && inputValue > 0) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  }
  // Number not between 1 to 20
  else if (inputValue < 0 || inputValue > 20) {
    document.querySelector('.guess-message').textContent =
      'Not between 1 to 20';
  }
});

//Restart
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number-input').value = null;
  document.querySelector('.guess-message').textContent = 'Input Number!';
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.question').style.color = '#000';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.score').textContent = score;
});
