import './style.css';
import URL from './myAPI.js';
import MyCustomGame from './myCustomGame.js';
import fetchMyScores from './fetchMyScores.js';
import addMyScore from './addMyScore.js';

const form = document.getElementById('form');
const btnRefresh = document.getElementById('refresh');

function myfunc() {
  return new MyCustomGame();
}

myfunc();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = form.name.value;
  const score = form.score.value;
  addMyScore(user, score, URL);
  form.reset();
});

btnRefresh.addEventListener('click', () => {
  window.addEventListener('DOMContentLoaded', fetchMyScores());
});
