import React, { useReducer } from "react";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import { todoReducer } from "./todoReducer";
import { Todo } from "./interfaces/Todo.interface";

const initialState: Todo[] = [
  {
    id: new Date().getTime(),
    description: "Estudiar React Hook",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Estudiar Redux",
    done: false,
  },
];

export const TodoApp: React.FC = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  const onNewTodo = (todo: Todo) => {
    console.log(todo);
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
                <TodoList todos={todos} />
              </div>

              <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />

                <TodoAdd addTodo={onNewTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
