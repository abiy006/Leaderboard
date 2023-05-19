const addMyScore = async (user, score, url) => {
  const data = {
    user,
    score,
  };
  try {
    const myscore = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, myscore);
    const result = await response.json();
    return result;
  } catch (error) { return error; }
};

export default addMyScore;