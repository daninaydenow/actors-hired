import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout()
      .then(() => navigate("/"))
      .catch((error) => {
        console.log(error);
      });
  }, [logout, navigate]);

  return null;
};

export default Logout;
