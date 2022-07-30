import { Todo, TodoAction, TodoActionKind } from "./interfaces/Todo.interface";

export const todoReducer = (initialState: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case TodoActionKind.ADD:
      return [...initialState, action.payload];

    case TodoActionKind.DELETE:
      return initialState.filter((todo) => todo.id !== action.payload);
    default:
      return initialState;
  }
};
