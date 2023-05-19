import addTodo from './add_todo.js';
import removeTheList from './remove_todo.js';
import { updateListText, updateListLStorage } from './update_todo.js';
import { toggleChkBox, clearCompletedChkBox } from './checkbox_todo.js';

export default function displayTodos(todos) {

  const todoList = document.getElementById('mytodo');

  todoList.className = 'todoList';
  todoList.innerHTML = '';
  const todoHeader = document.createElement('h1');
  todoHeader.innerHTML = "Today's To Do";
  todoList.appendChild(todoHeader);
  const form = document.createElement('form');
  form.style.display = 'flex';
  form.style.width = '50%';
  form.addEventListener('submit', () => {
    if (localStorage.getItem('todos')) {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    const description = document.getElementById('target_todo').value;
    const newTodo = { description, completed: false };
    todos.push(newTodo);
    addTodo(todos);
  });
  const input1 = document.createElement('input');
  input1.id = 'target_todo';
  input1.type = 'text';
  input1.placeholder = 'Add to your list...';
  input1.style.fontStyle = 'italic';
  input1.style.display = 'flex';
  input1.style.height = '2rem';
  input1.style.width = '100%';
  input1.style.alignItems = 'center';
  form.appendChild(input1);
  todoList.appendChild(form);

  todos.forEach((todo, index) => {
    const chkbox = document.createElement('input');
    chkbox.type = 'checkbox';
    if (todo.completed) {
      chkbox.checked = true;
    } else {
      chkbox.checked = false;
    }
    chkbox.addEventListener('click', () => {
      toggleChkBox(todos, index);
    });

    const li = document.createElement('li');
    li.className = 'mytodolist';
    li.style.width = '50%';
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

    const rmBtn = document.createElement('input');
    rmBtn.type = 'button';
    rmBtn.style.margin = '1rem';
    rmBtn.setAttribute('class', 'removeListItem');
    rmBtn.setAttribute('data-index', `${index}`);
    rmBtn.value = 'Remove';
    rmBtn.addEventListener('click', () => {
      todos.splice(`${index}`, 1);
      removeTheList(todos);
      window.location.reload();
    });

    li.appendChild(chkbox);
    li.appendChild(desc);
    li.appendChild(rmBtn);
    if (index % 2 === 0) {
      li.style.backgroundColor = 'gray';
    } else {
      li.style.backgroundColor = '#ccc';
    }
    todoList.appendChild(li);
  });

  const clearAllBtn = document.createElement('input');
  clearAllBtn.type = 'button';
  clearAllBtn.setAttribute('class', 'clearAllBtn');
  clearAllBtn.value = 'Clear all completed';
  clearAllBtn.style.display = 'flex';
  clearAllBtn.style.height = '3rem';
  clearAllBtn.style.padding = '1rem';
  clearAllBtn.style.width = '50%';
  clearAllBtn.style.justifyContent = 'center';
  clearAllBtn.addEventListener('click', () => {
    clearCompletedChkBox(todos);
    window.location.reload();
  });
  todoList.appendChild(clearAllBtn);
}


