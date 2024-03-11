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
import ProductList from './ProductList';
import EditProduct from './EditProduct'; // Importar el nuevo componente
import ProtectedRoute from './ProtectedRoute';
import OrderAddress from './OrderAddress';
import Footer from './Footer';


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
          <Route path="/account" element={<AccountComponent />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/login/empleado" element={<LoginEmployee setIsLoggedIn={setIsLoggedIn} />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/management-panel" element={<ManagementPanel />} />
            <Route path="/products-list" element={<ProductList />} />
            <Route path="/register/empleado" element={<Register_Employee />} />

          </Route>         
          <Route path="/form-products" element={<FormProducts />} />
          <Route path="/product_edit/:productId" element={<EditProduct />} />
          <Route path="/order_address" element={<OrderAddress />} />


        </Routes>
        <Footer />
      </div>


    </Router>
  );
}

export default App;