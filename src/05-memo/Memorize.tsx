import React, { useState } from "react";

import { SmallMemo } from "./SmallMemo";
import { useCount } from "../hooks";

export const Memorize = () => {
  const [show, setShow] = useState<boolean>(true);
  const { count, increment } = useCount(1);

  return (
    <section className="Memorize">
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1>
              Memorize <SmallMemo count={count} />
            </h1>
            <hr />

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
