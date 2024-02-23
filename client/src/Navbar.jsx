import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="flex justify-end p-4 bg-gray-200">
      {isLoggedIn ? (
        <>
          <Link to="/dashboard" className="mx-2">
            Dashboard
          </Link>
          <button onClick={handleLogout} className="mx-2">
            Cerrar Sesión
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="mx-2">
            Iniciar Sesión
          </Link>
          <Link to="/signup" className="mx-2">
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