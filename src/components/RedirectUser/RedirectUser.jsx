import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/userContext";

export default function RedirectUser() {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" /> : <Outlet />;
}
