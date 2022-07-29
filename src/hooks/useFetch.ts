import { useEffect, useState } from "react";

import { Quote, State } from "../interfaces/UseFetch.interface";

const initialState: State = {
  data: [],
  isLoading: true,
  hasError: null,
};

export const useFetch = (url: string) => {
  const [state, setState] = useState<State>(initialState);

  const getFetch = async () => {
    setState({ ...state, isLoading: true });

    const response: Response = await fetch(url);
    const data: Quote[] = await response.json();

    setState({ ...state, data, isLoading: false });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state,
  };
};
