import React, { ChangeEvent, useState } from "react";
import { Todo } from "./interfaces/Todo.interface";

import { useForm } from "../hooks/useForm";

interface Props {
  addTodo: (todo: Todo) => void;
}

export const TodoAdd: React.FC<Props> = ({ addTodo }) => {
  const [description, setDescription] = useState<string>("");

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDescription(value);
  };

  const onAddTodo = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const descriptionTodo = description.trim();

    if (descriptionTodo.length === 0) return;

    const newTodo: Todo = {
      id: new Date().getTime() * 3,
      description: descriptionTodo,
      done: false,
    };

    addTodo(newTodo);
    setDescription("");
  };

  return (
    <form autoComplete="off" onSubmit={onAddTodo}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onChangeDescription}
      />

      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
