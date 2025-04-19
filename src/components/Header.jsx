import { FaHome, FaGithub } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import Logo from "../assets/images/mylogo.png";

function Header() {
  return (
    <div>
      {/* Mobil Logo (faqat kichik ekranlar uchun) */}
      <div className="sm:bg-base-100 bg-none sm:hidden">
        <Link to="/" className="navbar-start block items-center gap-2">
          <p className="text-primary hover:text-primary-focus transform text-center text-2xl font-bold transition duration-300 hover:scale-105">
            SHOHRUH.<span className="text-green-700">uz</span>
          </p>
        </Link>
      </div>

      {/* Desktop Navbar */}
      <header className="navbar bg-base-100 fixed top-0 left-0 z-[1000] hidden w-full shadow-sm sm:flex">
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2">
            <img
              className="h-[40px] w-[40px] transform rounded-full hover:scale-100"
              src={Logo}
              alt="my logo png"
            />
            <p className="text-primary hover:text-primary-focus transform text-2xl font-bold transition duration-300 hover:scale-105">
              SHOHRUH.<span className="text-green-700">uz</span>
            </p>
          </Link>
        </div>

        <div className="navbar-center">
          <nav>
            <ul className="flex items-center gap-6">
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

        <div className="navbar-end">
          <Link
            to="https://github.com/shokhruh61"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="ml-4 h-7 w-7" />
          </Link>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="bg-base-200 fixed right-2 bottom-2 left-2 z-50 block sm:hidden">
        <ul className="rounded-box flex items-center justify-between p-0.5 shadow-lg">
          <li>
            <Link
              className="flex flex-col items-center gap-1"
              to="/"
              aria-label="Bosh sahifa"
            >
              <FaHome className="h-7 w-7" />
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center gap-1"
              to="/about"
              aria-label="Haqimda"
            >
              <FcAbout className="h-7 w-7" />
              <span>about</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center gap-1"
              to="/projects"
              aria-label="Loyihalar"
            >
              <GrProjects className="h-7 w-7" />
              <span>projects</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center gap-1"
              to="/contact"
              aria-label="Bog‘lanish"
            >
              <IoIosContact className="h-7 w-7" />
              <span>contact</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center gap-1"
              to="https://github.com/shokhruh61"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-7 w-7" />
              <span>GitHub</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
