import React, { useReducer } from "react";

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

  console.log(todos);

  return (
    <section className="TodoApp">
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1>TodoApp</h1>
            <hr />

            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
