import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { HiUserCircle } from 'react-icons/hi';
import { FaSignOutAlt } from 'react-icons/fa';

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="mx-auto flex justify-between max-w-7xl items-center gap-x-6 lg:px-8" aria-label="Global">
    <Link to="/dashboard">
        <span className="sr-only">Dashboard</span>
        <img className="h-16 w-auto" src="./partyandgift.png" alt="" />
    </Link>
    {isLoggedIn ? (
        <div className="flex gap-x-6 items-center">
        <Link to="/order_address" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 hover:text-blue-400">
        <HiOutlineShoppingCart className="inline-block mr-1 h-5 w-5" /> Carrito
        </Link>
        <Link to="/account" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 hover:text-blue-400">
        <HiUserCircle className="inline-block mr-1 h-5 w-5" /> Mi Perfil
        </Link>
        <button 
         onClick={handleLogout} 
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-red-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 flex items-center space-x-2">  <FaSignOutAlt />
        Cerrar Sesión
        </button>

       </div>
      
    ) : (
        <div className="flex gap-x-6 items-center">
            <Link to="/login" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
                Iniciar Sesión
            </Link>
            <Link to="/signup" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Registrarse
            </Link>
        </div>
    )}
</nav>
  );
}

Navbar.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
  };

export default Navbar;