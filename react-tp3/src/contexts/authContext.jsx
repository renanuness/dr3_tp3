import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("@user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const navigate = useNavigate();

  const login = (userData) => {
    if (
      userData.email === "corinthians123@gmail.com" &&
      userData.password === "vaicurintia123!"
    ) {
      setUser(userData);
      localStorage.setItem("@user", JSON.stringify(userData));
      navigate("/");
    } else {
      alert("Erro na autenticação");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("@user");
    navigate("/login");
  };

  const value = {
    user,
    login,
    logout,
    isLogged: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
