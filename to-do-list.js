const todoList = ['emmanuel',  'make money'];

renderTodoList();

function renderTodoList () {
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];
  const html = `<p>${todo} </p>`;
  todoListHTML += html;
}
console.log(todoListHTML);

document.querySelector(".js-todo-list")
.innerHTML = todoListHTML;

}



function addTodo () {
 const inputElem = document.querySelector(".js-name-input")
 const name = inputElem.value;
 todoList.push(name);
 console.log(todoList);

 inputElem.value = '';

 renderTodoList();
}