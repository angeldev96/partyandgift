import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Aquí debes determinar si el usuario está autenticado o no
  // Puedes obtener esta información del estado de React o del localStorage
  const isAuthenticated = localStorage.getItem('token') !== null;

  // Si el usuario está autenticado, renderiza el componente hijo (Outlet)
  // De lo contrario, redirige al usuario a la página de inicio de sesión
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;