import { updateListText, updateListLStorage } from './update_score.js';

export default function displayTodos(todos) {
  
  const todoList = document.getElementById('myScores');

  todoList.className = 'todoList';
  todoList.innerHTML = '';

  const form = document.createElement('form');
  form.style.display = 'flex';
  form.style.width = '50%';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'mytodolist';
    li.style.height = '3rem';
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    const desc = document.createElement('p');
    desc.style.display = 'flex';
    desc.style.justifyContent = 'center';
    desc.setAttribute('class', 'addedListItem');
    desc.textContent = todo.name;

    const desc2 = document.createElement('p');
    desc2.style.display = 'flex';
    desc2.style.justifyContent = 'center';
    desc2.textContent = todo.score;

    li.appendChild(desc);
    li.appendChild(desc2);

    if (index % 2 === 0) {
      li.style.backgroundColor = 'gray';
    } else {
      li.style.backgroundColor = '#ccc';
    }
    todoList.appendChild(li);
  });
}
