import displayTodos from './viewtodo.js';
import { todos } from './array_todo.js';
import './style.css';

class TodoList {
  constructor(todos) {
    displayTodos(todos);
  }
}
function myfunc() {
  return new TodoList(todos);
}

myfunc();
