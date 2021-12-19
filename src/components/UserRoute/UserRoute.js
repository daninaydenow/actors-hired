import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const UserRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser || !location.state) {
    return <Navigate to="/login" />;
  }

  return currentUser?.uid === location.state.ownerId ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

export default UserRoute;
