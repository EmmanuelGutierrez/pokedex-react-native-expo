import React, { useState, createContext } from "react";
import { UserData } from "../components/UserData/UserData";
import { userData } from "../utils/userDB";

export interface authContextI {
  user: typeof userData | undefined;
  login: () => void;
  logOut: () => void;
}

export const AuthContext = createContext({} as authContextI);

interface AuthProviderPropsI {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: AuthProviderPropsI) => {
  const [user, setUser] = useState<typeof userData | undefined>(undefined);

  const login = () => setUser(userData);
  const logOut = () => setUser(undefined);

  const valueContext = {
    user,
    login,
    logOut,
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};
