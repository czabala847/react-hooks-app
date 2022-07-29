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

export interface TodoAction {
  type: TodoActionKind;
  payload?: number | string | boolean;
}
