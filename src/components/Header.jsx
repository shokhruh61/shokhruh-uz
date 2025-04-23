import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Logo from "../assets/images/mylogo.png";
import { FaBars } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdContacts } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

function Header() {
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const dropdown = dropdownRef.current;
    if (dropdown) {
      const details = dropdown.querySelector("ul");
      if (details) {
        dropdown.removeAttribute("open");
      }
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="bg-base-100">
        <header className="container mx-auto flex w-full items-center justify-between bg-base-100 px-4 py-2 shadow-sm">
          <div className="">
            <Link to="/" className="flex items-center gap-2">
              <img
                className="h-[55px] w-[55px] transform rounded-full hover:scale-100"
                src={Logo}
                alt="my logo png"
              />
              <div>
                <p className="flex text-2xl font-bold text-green-700 duration-300 hover:text-green-300">
                  SH
                  <span className="hidden md:block">OHRUH</span>
                  <span className="text-blue-700">.uz</span>
                </p>
              </div>
            </Link>
          </div>

          <div className="">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-4 sm:flex">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      <div className="fixed bottom-0 left-0 z-50 w-full bg-base-300 p-4 md:hidden md:p-3 lg:p-2">
        <ul className="flex items-center justify-between">
          <li>
            <Link to="/">
              <FaHome className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FcAbout className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <MdContacts className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <GrProjects className="h-5 w-5" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
