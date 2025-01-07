import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFilm,
} from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Footer = () => {
  const { theme } = useContext(AuthContext);
  return (
    <footer
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-200 text-gray-900"
      } py-8`}
    >
      <div className="container mx-auto w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center">
              <FaFilm
                className={`text-3xl mr-2 ${
                  theme === "dark" ? "text-primary" : "text-gray-700"
                }`}
              />
              <Link to="/" className="text-2xl font-bold">
                MovieHaven
              </Link>
            </div>
            <p className="text-sm">
              MovieHaven is your go-to destination for exploring and sharing
              your favorite movies. Join us to discover new films, create
              watchlists, and connect with movie enthusiasts around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-movie" className="hover:text-primary">
                  All Movies
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} MovieHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
