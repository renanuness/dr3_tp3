import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import { AuthProvider, useAuth } from "./contexts/authContext.jsx";
import Header from "./components/Header/index.jsx";
import UserInfo from "./pages/user-info/index.jsx";

const PrivateRoute = ({ children }) => {
  const { isLogged } = useAuth();

  return isLogged ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Header />
              </PrivateRoute>
            }
          />

          <Route
            path="/user-info"
            element={
              <PrivateRoute>
                <UserInfo />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
