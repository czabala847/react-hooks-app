import React from "react";
import { TodoItem } from "./TodoItem";

import { Todo } from "./interfaces/Todo.interface";

interface Props {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<Props> = ({
  todos,
  deleteTodo,
  toggleTodo,
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};
