import "./style.css";

let newTodo = document.querySelector(".todo-name");
let addTodo = document.querySelector(".add-todo");
let clearBtn = document.querySelector(".clear");
const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");

const lists = document.querySelector("[data-lists]");

let todoArr = [
  {
    index: 1,
    description: "Buy nuts",
    completed: false,
  },
  {
    index: 2,
    description: "Complete USP",
    completed: true,
  },
  {
    index: 3,
    description: "Read the Deep Work",
    completed: false,
  },
];
const displayToDo = () => {
  const displayToDo = todoArr.map(
    (item) => `
    <div class="todo item">
    <input type="checkbox" class="checkbox" />
    <p>${item.description}</p>
    <span class="delete" data-id="${item.id}">X</span>
  </div> `
  );
  lists.innerHTML = displayToDo.join(" ");
};

const removeTodo = () => {
  lists.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      console.log("deleted");
      e.target.parentElement.remove();
    }

    let idBtn = e.target.dataset.id;
  });
};

removeTodo();
displayToDo();
window.addEventListener("DOMContentLoaded", () => {
  displayToDo();
});
