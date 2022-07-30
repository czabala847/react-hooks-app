import React, { useEffect, useReducer } from "react";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import { useTodo } from "./hooks/useTodo";

export const TodoApp: React.FC = () => {
  const {
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countPending,
    countTodos,
  } = useTodo();

  return (
    <section className="TodoApp">
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1>
              TodoApp {countTodos()},{" "}
              <small>pendientes: {countPending()}</small>
            </h1>
            <hr />

            <div className="row">
              <div className="col-7">
                <TodoList
                  todos={todos}
                  deleteTodo={handleDeleteTodo}
                  toggleTodo={handleToggleTodo}
                />
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
