import React from "react";
import { TodoItem } from "./TodoItem";

import { Todo } from "./interfaces/Todo.interface";

export const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
