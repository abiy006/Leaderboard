// export default function addTodo(todos) {
function addTodo(todos) {
  window.localStorage.setItem('todos', JSON.stringify(todos));
}

module.exports = addTodo;