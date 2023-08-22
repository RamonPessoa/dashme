import { createContext, useContext } from "react";

export const LoginContext = createContext(null);

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error(
      "useLoginContext must be used within a LoginContextProvider"
    );
  }
  return context;
}
