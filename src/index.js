import displayTodos from './viewscore.js';
import { todos } from './array_score.js';
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
