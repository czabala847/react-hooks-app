import React from "react";
import { useCount } from "../hooks/useCount";

export const CounterAppWithHook: React.FC = () => {
  const { count, increment, decrement, reset } = useCount(10);

  return (
    <div className="CounterApp">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>CounterAppWithHook {count}</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => decrement(2)}>
              -
            </button>
            <button className="btn btn-primary mx-2" onClick={() => reset()}>
              Reset
            </button>
            <button className="btn btn-primary" onClick={() => increment(3)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
