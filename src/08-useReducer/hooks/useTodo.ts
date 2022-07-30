import React, { useEffect, useReducer } from "react";

import { todoReducer } from "../todoReducer";
import { Todo, TodoAction, TodoActionKind } from "../interfaces/Todo.interface";

//  Evitar que el useEffect en el primer montado borré el localStorage
const init = (): Todo[] => {
  let todosStorage = localStorage.getItem("todos");

  if (todosStorage) {
    return JSON.parse(todosStorage);
  }

  return [];
};

const initialState: Todo[] = [];

export const useTodo = () => {
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

  const handleToggleTodo = (id: number) => {
    dispatchTodo({ type: TodoActionKind.TOGGLE, payload: id });
  };

  const countPending = (): number => {
    const completes = todos.filter((todo) => todo.done === false);

    return completes.length;
  };

  const countTodos = (): number => todos.length;

  return {
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countPending,
    countTodos,
  };
};
