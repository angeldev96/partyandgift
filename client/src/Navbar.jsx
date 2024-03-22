import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { HiOutlineShoppingCart, HiUserCircle } from 'react-icons/hi';
import { FaSignOutAlt } from 'react-icons/fa';

function Navbar({ isLoggedIn, handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mx-auto flex justify-between max-w-7xl items-center gap-x-6 lg:px-8" aria-label="Global">
      <Link to="/dashboard" className="flex items-center gap-x-4">
        <img className="h-16 w-auto" src="./partyandgift.png" alt="" />
        <div className="flex items-center gap-x-1 text-gray-900">
          <span className="text-lg font-semibold hover:text-blue-500">Inicio</span>
        </div>
        <div className="flex items-center gap-x-1 text-gray-900">
          <span className="text-lg font-semibold hover:text-blue-500">Acerca</span>
        </div>
      </Link>
      {isLoggedIn ? (
        <div className="flex gap-x-6 items-center">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={toggleMenu}
              >
                <HiOutlineDocumentText className="inline-block mr-1 h-7 w-7" /> Catálogo
              </button>
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-2 grid grid-cols-3 gap-x-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <div>
                  <Link to="/arrangements" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Arreglos</Link>
                  <Link to="/Gift_boxes" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Caja de Regalos</Link>
                  <Link to="/Sweet_boxes" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Cajitas Dulceras</Link>
                  <Link to="/Spoons_forks" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Cucharas y Tenedores</Link>
                  <Link to="/Caps" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Gorros</Link>
                </div>
                <div>
                 <Link to="/Toys" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Juguetes</Link>
                  <Link to="/Birthday_numbers" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Números de Cumpleaños</Link>
                  <Link to="/Gift_wrap" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Papel de Regalo</Link>
                  <Link to="/Teddies" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Peluches</Link>
                  <Link to="/Pinatas" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Piñatas</Link>
                </div>
                <div>
                  <Link to="/Plate" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Platos</Link>
                  <Link to="/Portraits" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Retrateras</Link>
                  <Link to="/Cards" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Tarjetas</Link>                
                  <Link to="/Cups" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Tazas</Link>
                  <Link to="/Glasses" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-100">Vasos</Link>
                </div>
              
              </div>
            )}
          </div>
          <Link to="/carrito" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 hover:text-blue-400">
            <HiOutlineShoppingCart className="inline-block mr-1 h-7 w-7" /> Carrito (1)
          </Link>
          <Link to="/account" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 hover:text-blue-400">
            <HiUserCircle className="inline-block mr-1 h-7 w-7" /> Mi Perfil
          </Link>
          <button
            onClick={handleLogout}
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-red-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 flex items-center space-x-2">
            <FaSignOutAlt />
            Cerrar Sesión
          </button>
        </div>

      ) : (
        <div className="flex gap-x-6 items-center">
          <Link to="/login" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
            Catálogo
          </Link>
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