'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayGuessmessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};
// document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const inputValue = Number(document.querySelector('.number-input').value);

  // NaN
  if (!inputValue) {
    displayGuessmessage('Input Number!');
  }

  // Player Win
  else if (inputValue === secretNumber) {
    if (score > 0) {
      displayGuessmessage('You are right!!!');
      document.querySelector('.question').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#deb887';
      document.querySelector('.question').style.width = '70rem';
      document.querySelector('.question').style.color = 'lawngreen';
      //HighSscore results
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  }
  // Wrong number
  else if (inputValue !== secretNumber && inputValue <= 20 && inputValue > 0) {
    if (score > 1) {
      displayGuessmessage(inputValue > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessmessage('GAME OVER');
      document.querySelector('.score').textContent = 0;
    }
  }
  // Number not between 1 to 20
  else if (inputValue < 0 || inputValue > 20) {
    displayGuessmessage('Not between 1 to 20');
  }
});

//Restart
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number-input').value = null;
  displayGuessmessage('Input Number!');
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.question').style.color = '#000';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.score').textContent = score;
});
