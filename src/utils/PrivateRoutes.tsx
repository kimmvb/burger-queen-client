import { Outlet, Navigate, useLocation } from 'react-router-dom';

export const PrivateRoutes = () => {
  const accessToken = localStorage.getItem('accessToken');
  const location = useLocation();
  return accessToken ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export const AnonymousRoutes = () => {
  const accessToken = localStorage.getItem('accessToken');
  const location = useLocation();
  return accessToken ? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />;
};
