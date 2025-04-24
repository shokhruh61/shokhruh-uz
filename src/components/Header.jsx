import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdContacts } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import Logo from "../assets/images/mylogo.png";

const navLinks = [
  { name: "Home", to: "/", icon: <FaHome /> },
  { name: "About", to: "/about", icon: <FcAbout /> },
  { name: "Projects", to: "/projects", icon: <GrProjects /> },
  { name: "Contact", to: "/contact", icon: <MdContacts /> },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img
            src={Logo}
            alt="logo"
            className="h-10 w-10 rounded-full transition hover:scale-105"
          />
          <p className="text-xl font-bold text-green-700">
            SH<span className="hidden md:inline">OHRUH</span>
            <span className="text-blue-700">.uz</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition hover:text-green-500 ${
                location.pathname === link.to ? "font-bold text-green-600" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="text-2xl text-green-700 md:hidden"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu - Fixed Overlay style */}
      {menuOpen && (
        <div className="fixed left-0 right-0 top-[60px] z-40 bg-base-100 shadow-md md:hidden">
          <ul className="flex flex-col gap-4 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className={`flex items-center gap-2 text-lg transition hover:text-green-500 ${
                    location.pathname === link.to
                      ? "font-semibold text-green-600"
                      : ""
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
