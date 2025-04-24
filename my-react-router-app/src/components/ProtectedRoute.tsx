import { Navigate, useLocation } from "react-router-dom";
import { memo } from "react";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
  isLoading?: boolean;
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = memo(({ 
  isAuthenticated, 
  children, 
  isLoading = false,
  redirectPath = "/"
}) => {
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Store the attempted location for redirecting back after login
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <>{children}</>;
});

ProtectedRoute.displayName = 'ProtectedRoute';

export default ProtectedRoute;