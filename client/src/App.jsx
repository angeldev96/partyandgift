// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DashboardComponent from './DashboardComponent';
import LoginComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';
import Navbar from './Navbar';
import PrivateRoute from './PrivateRoute';

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
          {/* <PrivateRoute path="/user_settings" element={<UserSettings />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
