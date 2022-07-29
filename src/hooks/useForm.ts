import { useState } from "react";

import { SimpleForm } from "../interfaces/SimpleForm.interface";

export const useForm = (initialState: SimpleForm) => {
  const [stateForm, setStateForm] = useState<SimpleForm>(initialState);

  const changeValueInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setStateForm({ ...stateForm, [name]: value });
  };

  const reset = () => {
    setStateForm(initialState);
  };

  return {
    ...stateForm,
    stateForm,
    changeValueInput,
    reset,
  };
};
