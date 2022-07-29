import React from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook: React.FC = () => {
  const { username, email, password, changeValueInput, reset } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="SimpleForm">
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1>Form With Custom Hook</h1>
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
                className="form-control mb-3"
                placeholder="Correo del usuario"
                onChange={changeValueInput}
              />

              <input
                type="password"
                name="password"
                value={password}
                className="form-control mb-3"
                placeholder="Contraseña del usuario"
                onChange={changeValueInput}
              />

              <button type="button" onClick={reset} className="btn btn-primary">
                Cancelar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
