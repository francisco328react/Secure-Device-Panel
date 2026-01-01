import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import type { JSX } from "react";

type Props = {
  role: "admin" | "user";
  children: JSX.Element;
};

export function RoleRoute({ role, children }: Props) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (user.role !== role) return <Navigate to="/" />;

  return children;
}
