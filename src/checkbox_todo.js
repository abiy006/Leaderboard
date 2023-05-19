export function toggleChkBox(todos, index) {
  todos[index].completed = !todos[index].completed;
  localStorage.setItem('todos', JSON.stringify(todos));
}

export const clearCompletedChkBox = (todos) => {
  todos = todos.filter((todo) => !todo.completed);
  localStorage.setItem('todos', JSON.stringify(todos));
  
};