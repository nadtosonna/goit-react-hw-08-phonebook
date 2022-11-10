import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../shared/hooks/useAuth";

export default function PublicRoute() {
  const isLogged = useAuth();

  if (isLogged) {
    return <Navigate to="/contacts" />
  }

  return <Outlet />
}