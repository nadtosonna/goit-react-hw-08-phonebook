import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../shared/hooks/useAuth";

export default function PrivateRoute() {
  const isLogged = useAuth();

  if (!isLogged) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}