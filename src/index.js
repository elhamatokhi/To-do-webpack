import './style.css';

const lists = document.querySelector('[data-lists]');

const todoArr = [
  {
    index: 1,
    description: 'Buy nuts',
    completed: false,
  },
  {
    index: 2,
    description: 'Complete USP',
    completed: true,
  },
  {
    index: 3,
    description: 'Read the Deep Work',
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
  </div> `,
  );
  lists.innerHTML = displayToDo.join(' ');
};

const removeTodo = () => {
  lists.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove();
    }
  });
};

removeTodo();
displayToDo();
window.addEventListener('DOMContentLoaded', () => {
  displayToDo();
});
