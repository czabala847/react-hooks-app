import { useState } from "react";

export const useCount = (initialValue: number) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = (step: number): void => {
    setCount(count + step);
  };

  const decrement = (step: number): void => {
    setCount(count - step);
  };

  const reset = (): void => {
    setCount(initialValue);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
