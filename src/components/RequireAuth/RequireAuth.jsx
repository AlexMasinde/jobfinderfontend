import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/userContext";

export default function RequireAuth() {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
}
