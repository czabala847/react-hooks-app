// Estado global
export interface Todo {
  id: number;
  description: string;
  done: boolean;
}

// Action types
export enum TodoActionKind {
  ADD = "ADD",
  DELETE = "DELETE",
  TOGGLE = "TOGGLE",
}

export type TodoAction =
  | { type: TodoActionKind.TOGGLE; payload: number }
  | { type: TodoActionKind.DELETE; payload: number }
  | { type: TodoActionKind.ADD; payload: Todo };
