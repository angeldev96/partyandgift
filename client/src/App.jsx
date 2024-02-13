import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import DashboardComponent from './DashboardComponent';
import LoginComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogout = () => {
    // Limpiar el estado de autenticación
    localStorage.removeItem('isLoggedIn');
    // Actualizar el estado para reflejar que el usuario ha cerrado sesión
    setIsLoggedIn(false);
    // Redirigir al usuario a la página de inicio de sesión
    return <Navigate to="/login" />;
  };

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <nav className="flex justify-end p-4 bg-gray-200">
            <Link to="/dashboard" className="mx-2">
              Dashboard
            </Link>
            <button onClick={handleLogout} className="mx-2">
              Cerrar Sesión
            </button>
          </nav>
        ) : (
          <nav className="flex justify-end p-4 bg-gray-200">
            <Link to="/login" className="mx-2">
              Iniciar Sesión
            </Link>
            <Link to="/signup" className="mx-2">
              Registrarse
            </Link>
          </nav>
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/logout" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
