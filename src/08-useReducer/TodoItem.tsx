import React from "react";
import { Todo } from "./interfaces/Todo.interface";

export const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.description}</span>
      <button className="btn btn-outline-danger">Borrar</button>
    </li>
  );
};
