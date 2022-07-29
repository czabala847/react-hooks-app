import { Todo, TodoAction, TodoActionKind } from "./interfaces/Todo.interface";

export const todoReducer = (initialState: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case TodoActionKind.ADD:
      throw new Error("Action.type == ADD no esta implementada");

    default:
      return initialState;
  }
};
