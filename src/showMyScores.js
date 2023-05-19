const showMyScores = async (data) => {
  const myScoresList = document.getElementById('myScores');
  myScoresList.innerHTML = '';

  await data.result.forEach((element, index) => {
    const li = document.createElement('li');
    li.className = 'mytodolist';
    li.style.height = '3rem';
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    const desc = document.createElement('p');
    desc.style.display = 'flex';
    desc.style.justifyContent = 'center';
    desc.setAttribute('class', 'addedListItem');
    desc.textContent = `${element.user}: `;

    const desc2 = document.createElement('p');
    desc2.style.display = 'flex';
    desc2.style.justifyContent = 'center';
    desc2.textContent = element.score;

    li.appendChild(desc);
    li.appendChild(desc2);

    if (index % 2 === 0) {
      li.style.backgroundColor = 'gray';
    } else {
      li.style.backgroundColor = '#ccc';
    }
    myScoresList.appendChild(li);
  });
};

export default showMyScores;