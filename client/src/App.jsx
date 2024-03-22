import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DashboardComponent from './DashboardComponent';
import AddressForm from './AddressForm';
import Carrito from './Carrito';
import Arrangements from './Arrangements';
import Gift_boxes from './Gift_boxes';
// import Sweet_boxes from './Sweet_boxes'; 
import Spoons_forks from './Spoons_forks';
import Caps from './Caps';
import Toys from './Toys';
import Birthday_numbers from './Birthday_numbers';
import Gift_wrap from './Gift_wrap';
import Teddies from './Teddies';
import Pinatas from './Pinatas';
import Plate from './Plate';
import Portraits from './Portraits';
import Cards from './Cards';
import Cups from './Cups';
import Glasses from './Glasses';
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
import EditProduct from './EditProduct';
import ProtectedRoute from './ProtectedRoute';
import OrderAddress from './OrderAddress';
import Footer from './Footer';
import UnAuthorized from './UnAuthorized';
import EditAddressForm from './EditAddressForm';

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
          <Route path="/arrangements" element={<Arrangements />} />
          <Route path="/Gift_boxes" element={<Gift_boxes />} />
          {/* <Route path="/Sweet_boxes" element={<Sweet_boxes />} /> */}
          <Route path="/Spoons_forks" element={<Spoons_forks />} />
          <Route path="/Toys" element={<Toys />} />
          <Route path="/Caps" element={<Caps />} />
          <Route path="/Birthday_numbers" element={<Birthday_numbers />} />
          <Route path="/Gift_wrap" element={<Gift_wrap />} />
          <Route path="/Teddies" element={<Teddies />} />
          <Route path="/Pinatas" element={<Pinatas />} />
          <Route path="/Plate" element={<Plate />} />
          <Route path="/Portraits" element={<Portraits />} />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/Cups" element={<Cups />} />
          <Route path="/Glasses" element={<Glasses />} />
          <Route path="/login" element={<LoginComponent setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/login/empleado" element={<LoginEmployee setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/unauthorized" element={<UnAuthorized />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/account" element={<AccountComponent/>} />


          
          <Route element={<ProtectedRoute allowedRoles={['admin', 'empleado']} />}>
            <Route path="/management-panel" element={<ManagementPanel />} />
            <Route path="/products-list" element={<ProductList />} />
            <Route path="/register/empleado" element={<Register_Employee />} />
            <Route path="/form-products" element={<FormProducts />} />
            <Route path="/product_edit/:productId" element={<EditProduct />} />
            <Route path="/order_address" element={<OrderAddress />} />

          </Route>
          <Route element={<ProtectedRoute allowedRoles={['user']} />}>
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/account" element={<AccountComponent/>} />
            <Route path="/address-form" element={<AddressForm />} />
            <Route path="/edit-address-form" element={<EditAddressForm />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
