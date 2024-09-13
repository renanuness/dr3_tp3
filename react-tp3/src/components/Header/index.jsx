import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export default function Header() {
  const { isLogged, logout } = useAuth();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isLogged) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="flex justify-end">
      <button onClick={handleButtonClick}>
        {isLogged ? "Logout" : "Login"}
      </button>
    </header>
  );
}
