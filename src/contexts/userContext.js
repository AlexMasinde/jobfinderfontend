import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  const value = {
    user: auth,
    setAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
