const todoList = [];

function todo () {
  const inputElem = document.querySelector('.js-input-name')
 const name = inputElem.value;
 todoList.push (name);
 console.log(todoList);
 inputElem.value = '';
}