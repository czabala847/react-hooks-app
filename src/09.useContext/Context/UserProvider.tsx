import React from "react";
import { UseContext } from "./UseContext";

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  return <UseContext.Provider value={{}}>{children}</UseContext.Provider>;
};
