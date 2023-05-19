import displayTodos from './viewtodo.js';
import { todos } from './array_todo.js';

class TodoList {
  constructor(todos) {
    if (localStorage.getItem('todos')) {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    displayTodos(todos);
  }
}
function myfunc() {
  return new TodoList(todos);
}

myfunc();
