import { useContext, useState } from "react";
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
  FaSignOutAlt,
} from "react-icons/fa";
import { RiMovie2AiFill } from "react-icons/ri";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto w-11/12 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <FaFilm className="text-3xl text-primary mr-2" />
          <Link to="/" className="text-2xl font-bold">
            MovieHaven
          </Link>
        </div>
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
            <RiMovie2AiFill className="inline mr-2" />
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
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `hover:text-primary transition ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                <FaSignInAlt className="inline mr-2" /> Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `hover:text-primary transition ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                <FaUserPlus className="inline mr-2" />
                Register
              </NavLink>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                {user && user.photoURL ? (
                  <img
                    className="h-10 rounded-full w-10"
                    src={user?.photoURL}
                    title={user.displayName}
                    alt=""
                  />
                ) : (
                  <FaUser className="text-xl text-white" />
                )}
              </div>
              <button
                onClick={() => logOut()}
                className="`hover:text-primary transition"
              >
                <FaSignOutAlt className="inline mr-2" />
                Log Out
              </button>
            </>
          )}
        </div>
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
            <RiMovie2AiFill className="inline mr-2" />
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
          {!user && (
            <>
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
            </>
          )}
          {user && (
            <button
              onClick={() => logOut()}
              className="`hover:text-primary transition ml-4 pb-3"
            >
              <FaSignOutAlt className="inline mr-2" />
              Log Out
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
