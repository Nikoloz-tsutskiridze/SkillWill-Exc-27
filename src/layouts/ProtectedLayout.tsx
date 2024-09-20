import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  return user ? true : false;
};

const ProtectedLayout: React.FC = () => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedLayout;
