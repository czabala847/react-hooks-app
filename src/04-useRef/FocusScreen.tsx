import React, { useRef } from "react";

export const FocusScreen: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFocusInput = () => {
    inputRef.current?.select();
  };

  return (
    <section className="FocusScreen mt-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Focus Screen</h1>
            <hr />

            <input
              ref={inputRef}
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese un texto"
              name="text"
            />

            <button
              type="button"
              className="btn btn-primary"
              onClick={onFocusInput}
            >
              Focus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
