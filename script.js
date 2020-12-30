'use strict';
const y = Math.random();
let z = Math.floor(y * 20);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  if (z == document.querySelector('.guess').value) {
    document.querySelector('.message').textContent = 'Hola Correct 🤩';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.number').textContent = z;
    document.body.style.backgroundColor = 'green';
  } else if (z > Number(document.querySelector('.guess').value)) {
    document.querySelector('.message').textContent = 'Guess is too low !❌';
    document.querySelector('.score').textContent =
      Number(document.querySelector('.score').textContent) - 1;
  } else if (z < Number(document.querySelector('.guess').value)) {
    document.querySelector('.message').textContent = 'Guess is too high !❌';
    document.querySelector('.score').textContent =
      Number(document.querySelector('.score').textContent) - 1;
  } else if (document.querySelector('.guess').value == '') {
    document.querySelector('.message').textContent =
      'No Number please Enter!!❓';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = 'black';
  document.querySelector('.message').textContent = 'start guessing ';
  z = Math.floor(Math.random() * 20);
  document.querySelector('.score').textContent = score;
});
