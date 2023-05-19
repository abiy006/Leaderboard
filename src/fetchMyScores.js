import URL from './myAPI.js';
import showMyScores from './showMyScores.js';

const fetchMyScores = async () => {
  try {
    // const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0eBiwxCPZCs0dO5mbk2z/scores/';
    const data = await fetch(URL);
    const result = await data.json();

    showMyScores(result);
    return result;
  } catch (error) { return error; }
};

export default fetchMyScores;