import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, redirectTo }) => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? (
    children
  ) : (
    <Navigate to={redirectTo} state={{ redirectedFromCheckout: true }} />
  );
};

export default ProtectedRoute;
