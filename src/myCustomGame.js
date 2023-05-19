import fetchMyScores from './fetchMyScores.js';

class MyCustomGame {
  constructor() {
    // this.load = window.addEventListener('DOMContentLoaded', fetchMyScores.bind(this));
    this.load = window.addEventListener('DOMContentLoaded', fetchMyScores.bind(this));
  }
}

export default MyCustomGame;