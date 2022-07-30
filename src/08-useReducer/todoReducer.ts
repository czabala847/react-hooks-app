import { Todo, TodoAction, TodoActionKind } from "./interfaces/Todo.interface";

export const todoReducer = (initialState: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case TodoActionKind.ADD:
      return [...initialState, action.payload];

    case TodoActionKind.DELETE:
      return initialState.filter((todo) => todo.id !== action.payload);

    case TodoActionKind.TOGGLE:
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });

    default:
      return initialState;
  }
};
