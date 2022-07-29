import React, { useState } from "react";

import { SimpleForm as SimpleFormInterface } from "../interfaces/SimpleForm.interface";

export const SimpleForm = () => {
  const [stateForm, setStateForm] = useState<SimpleFormInterface>({
    username: "czabala847",
    email: "czabala847@gmail.com",
  });

  const { username, email } = stateForm;

  const changeValueInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setStateForm({ ...stateForm, [name]: value });
  };

  return (
    <div className="SimpleForm">
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1>Simple Form</h1>
            <hr />

            <form autoComplete="off">
              <input
                type="text"
                name="username"
                value={username}
                className="form-control mb-3"
                placeholder="Nombre de usuario"
                onChange={changeValueInput}
              />

              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                placeholder="Correo del usuario"
                onChange={changeValueInput}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
