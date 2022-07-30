import React from "react";
import { Todo } from "./interfaces/Todo.interface";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-outline-danger"
        onClick={() => deleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
