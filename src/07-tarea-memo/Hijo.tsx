import React from "react";

interface Props {
  numero: number;
  incrementar: (numero: number) => void;
}

export const Hijo: React.FC<Props> = React.memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
