import addTodo from './add_todo.js';
import removeTheList from './remove_todo.js';
import { updateListText, updateListLStorage } from './update_todo.js';

export default function displayTodos(todos) {

  const todoList = document.getElementById('mytodo');

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
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    const desc = document.createElement('p');
    desc.style.display = 'flex';
    desc.style.justifyContent = 'center';
    desc.style.width = '100%';
    desc.setAttribute('class', 'addedListItem');
    desc.textContent = todo.description;

    desc.addEventListener('click', () => {

      updateListText(index, desc, todo, li);

        li.addEventListener('submit', () => {
          const editedtext = document.getElementById(`input${index}`).value;
          updateListLStorage(index, todos, editedtext);
        });
      });

    li.appendChild(desc);

    if (index % 2 === 0) {
      li.style.backgroundColor = 'gray';
    } else {
      li.style.backgroundColor = '#ccc';
    }
    todoList.appendChild(li);
  });

}


