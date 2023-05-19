// export default function removeTheList(myv, todos) {
function removeTheList(todos) {
  window.localStorage.setItem('todos', JSON.stringify(todos));
}

module.exports = removeTheList;