export function updateListLStorage(index, todos, editedtext) {
  todos[index].description = editedtext;
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function updateListText(index, desc, todo, li) {
  const form1 = document.createElement('form');
  form1.id = `form${index}`;
  const input2 = document.createElement('input');
  input2.type = 'text';
  input2.id = `input${index}`;
  input2.value = todo.description;
  li.replaceChild(form1, desc);
  form1.appendChild(input2);
}
