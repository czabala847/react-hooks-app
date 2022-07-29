import React, { useMemo, useState } from "react";

import { useCount } from "../hooks";

const heavyStuff = (iterations: number) => {
  for (let i = 0; i < iterations; i++) {
    console.log(`Ahí vamos ${iterations}`);
  }

  return `${iterations} done!`;
};

export const MemoHook = () => {
  const [show, setShow] = useState<boolean>(true);
  const { count, increment } = useCount(5000);
  const memorizedValue = useMemo(() => heavyStuff(count), [count]);

  return (
    <section className="Memorize">
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1>
              Memo Hook <small>{count}</small>
            </h1>
            <hr />

            <h4>{memorizedValue}</h4>

            <button
              className="btn btn-primary me-2"
              onClick={() => increment(1)}
            >
              +1
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => setShow(!show)}
            >
              Show/Hidden {JSON.stringify(show)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
