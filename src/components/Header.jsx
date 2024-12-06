import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFilm,
  FaHome,
  FaHeart,
  FaPlus,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <FaFilm className="text-3xl text-primary mr-2" />
          <Link to="/" className="text-2xl font-bold">
            MovieHaven
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-primary transition ${isActive ? "text-primary" : ""}`
            }
          >
            <FaHome className="inline mr-2" /> Home
          </NavLink>
          <NavLink
            to="/all-movie"
            className={({ isActive }) =>
              `hover:text-primary transition ${isActive ? "text-primary" : ""}`
            }
          >
            All Movies
          </NavLink>
          <NavLink
            to="/add-movie"
            className={({ isActive }) =>
              `hover:text-primary transition ${isActive ? "text-primary" : ""}`
            }
          >
            <FaPlus className="inline mr-2" /> Add Movie
          </NavLink>
          <NavLink
            to="/fav-movie"
            className={({ isActive }) =>
              `hover:text-primary transition ${isActive ? "text-primary" : ""}`
            }
          >
            <FaHeart className="inline mr-2" /> My Favorites
          </NavLink>
        </nav>

        {/* Profile Avatar (Non-clickable) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <FaUser className="text-xl text-white" />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-primary focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className="block py-2 px-4 hover:bg-gray-700"
          >
            <FaHome className="inline mr-2" /> Home
          </NavLink>
          <NavLink
            to="/all-movie"
            onClick={toggleMenu}
            className="block py-2 px-4 hover:bg-gray-700"
          >
            All Movies
          </NavLink>
          <NavLink
            to="/add-movie"
            onClick={toggleMenu}
            className="block py-2 px-4 hover:bg-gray-700"
          >
            <FaPlus className="inline mr-2" /> Add Movie
          </NavLink>
          <NavLink
            to="/fav-movie"
            onClick={toggleMenu}
            className="block py-2 px-4 hover:bg-gray-700"
          >
            <FaHeart className="inline mr-2" /> My Favorites
          </NavLink>
          <NavLink
            to="/login"
            onClick={toggleMenu}
            className="block py-2 px-4 hover:bg-gray-700"
          >
            <FaSignInAlt className="inline mr-2" /> Login
          </NavLink>
          <NavLink
            to="/register"
            onClick={toggleMenu}
            className="block py-2 px-4 hover:bg-gray-700"
          >
            <FaUserPlus className="inline mr-2" /> Register
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
