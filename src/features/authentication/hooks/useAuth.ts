import { useEffect, useState } from "react";
import { container } from "tsyringe";
import AuthService from "../../../core/services/AuthService";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<{
    username: string;
    email: string;
  } | null>(null);
  const authService = container.resolve(AuthService);

  useEffect(() => {
    const authSubscription = authService.getAuthStatus().subscribe((status) => {
      setIsAuthenticated(status);
    });

    const userSubscription = authService.getCurrentUser().subscribe((user) => {
      setCurrentUser(user);
    });

    return () => {
      authSubscription.unsubscribe();
      userSubscription.unsubscribe();
    };
  }, [authService]);

  return { isAuthenticated, currentUser };
};

export default useAuth;
