import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    navigate("/");
  };

  const value = {
    user,
    login,
    isLogged: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
