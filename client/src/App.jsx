import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import DashboardComponent from './DashboardComponent';
import LoginComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';
import Register_Employee from './Register_Employee';
import Navbar from './Navbar';
import UserSettings from './UserSettings';
import PrivateRoute from './PrivateRoute';


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
            <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/signup_employee" element={<Register_Employee/>} />
          <Route path="/logout" element={<Navigate to="/dashboard" />} />
          <PrivateRoute path="/user_settings" element={<UserSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
