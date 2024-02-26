// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DashboardComponent from './DashboardComponent';
import LoginComponent from './LoginComponent';
import Register_Employee from './Register_Employee';
import SignUpComponent from './SignUpComponent';
import Navbar from './Navbar';
import AccountComponent from './AccountComponent';
import PasswordReset from './PasswordReset';
import LoginEmployee from './LoginEmployee';
import ManagementPanel from './ManagementPanel';
import FormProducts from './FormProducts';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('token');
    if (storedLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/login" element={<LoginComponent setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/register/empleado" element={<Register_Employee />} />
          <Route path="/account" element={<AccountComponent />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/login/empleado" element={<LoginEmployee setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/management-panel" element={<ManagementPanel />} />
          <Route path="/form-products" element={<FormProducts />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
