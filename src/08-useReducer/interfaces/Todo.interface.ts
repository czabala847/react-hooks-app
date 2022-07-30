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
}

export type TodoAction =
  | { type: TodoActionKind.DELETE, payload: number }
  | { type: TodoActionKind.ADD; payload: Todo };
