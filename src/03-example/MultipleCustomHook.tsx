import React from "react";
import { useCount, useFetch } from "../hooks";

import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

const urlFetch = "https://www.breakingbadapi.com/api/quotes";

export const MultipleCustomHook: React.FC = () => {
  const { count, increment } = useCount(1);
  const { data, isLoading, hasError } = useFetch(`${urlFetch}/${count}`);

  const { author, quote } = data[0] || {};
  return (
    <div className="MultipleCustomHook mt-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Multiple Custom Hook</h1>
            <hr />

            {isLoading ? (
              <LoadingQuote />
            ) : (
              <Quote author={author} quote={quote} />
            )}

            <button
              className="btn btn-primary"
              onClick={() => increment(1)}
              disabled={isLoading}
            >
              Next Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
