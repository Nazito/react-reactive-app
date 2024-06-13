import React from "react";
import User from "../../../shared/components/user/User";
import { Link } from "@tanstack/react-router";
import useAuth from "../../authentication/hooks/useAuth";
import { container } from "tsyringe";
import AuthService from "../../../core/services/AuthService";

interface HelloWorldProps {
  message: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ message }) => {
  const { isAuthenticated } = useAuth();

  const authService = container.resolve(AuthService);

  const handleLogout = () => {
    authService.logout();
  };
  return (
    <div>
      <User />
      <div className="mb-2">{message}</div>
      {!isAuthenticated ? (
        <Link className="text-indigo-600" to="/login">
          Login
        </Link>
      ) : (
        <p onClick={handleLogout} className="text-indigo-600 cursor-pointer">
          Logout
        </p>
      )}
    </div>
  );
};

export default HelloWorld;
