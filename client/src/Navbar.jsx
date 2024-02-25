import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
    {isLoggedIn ? (
        <>
          <Link to="/dashboard" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
            Store
          </Link>
          <button onClick={handleLogout} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Cerrar Sesión
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
            Iniciar Sesión
          </Link>
          <Link to="/signup" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Registrarse
          </Link>
        </>
      )}
    </nav>
  );
}

Navbar.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
  };

export default Navbar;