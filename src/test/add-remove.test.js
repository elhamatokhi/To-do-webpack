// import sum from "./add-remove.js";

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

/**
 * @jest-environment jsdom
 */

import Crud from "../modules/storage.js";

// import { LocalStorage } from 'localstorage-memory';
// global.localStorage = new LocalStorage();

describe("addTodo", () => {
//   beforeEach(() => {
//     localStorage.clear();
//   });

  it("should add a new todo to the todo list", () => {
    const crud = new Crud();
    crud.addTodo("Test Todo");
    const todos = crud.getToDos();
    expect(todos.length).toBe(1);
    expect(todos[0]).toEqual({
      description: "Test Todo",
      index: 0,
      complete: false,
      id: expect.any(String),
    });
  });

  it("should add a new todo with the complete status set to true", () => {
    const crud = new Crud();
    crud.addTodo("Test Todo", true);
    const todos = crud.getToDos();
    expect(todos.length).toBe(1);
    expect(todos[0]).toEqual({
      description: "Test Todo",
      index: 0,
      complete: true,
      id: expect.any(String),
    });
  });

//   it("should save the new todo to local storage", () => {
// //     const crud = new Crud();
// //     crud.addTodo("Test Todo");
// //     const storedTodos = JSON.parse(localStorage.getItem("todos"));
// //     expect(storedTodos.length).toBe(1);
// //     expect(storedTodos[0]).toEqual({
// //       description: "Test Todo",
// //       index: 0,
// //       complete: false,
// //       id: expect.any(String),
// //     });
// //   });
});
