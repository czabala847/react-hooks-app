import React, { useEffect, useReducer } from "react";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import { todoReducer } from "./todoReducer";
import { Todo, TodoAction, TodoActionKind } from "./interfaces/Todo.interface";

//  Evitar que el useEffect en el primer montado borré el localStorage
const init = (): Todo[] => {
  let todosStorage = localStorage.getItem("todos");

  if (todosStorage) {
    return JSON.parse(todosStorage);
  }

  return [];
};

const initialState: Todo[] = [];

export const TodoApp: React.FC = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo: Todo) => {
    const action: TodoAction = {
      type: TodoActionKind.ADD,
      payload: todo,
    };

    dispatchTodo(action);
  };

  const handleDeleteTodo = (id: number) => {
    dispatchTodo({ type: TodoActionKind.DELETE, payload: id });
  };

  return (
    <section className="TodoApp">
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1>
              TodoApp {10}, <small>pendientes: 2</small>
            </h1>
            <hr />

            <div className="row">
              <div className="col-7">
                <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
              </div>

              <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />

                <TodoAdd addTodo={handleAddTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
