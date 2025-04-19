import Logo from "../assets/images/mylogo.png";
import { FaBarsStaggered, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {


  return (
    <div className="bg-base-100">
      <header className="navbar bg-base-100 fixed top-0 left-0 z-[1000] w-full shadow-sm">
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2">
            <img
              className="hidden h-[40px] w-[40px] transform rounded-full hover:scale-100 sm:block"
              src={Logo}
              alt="my logo png"
            />
            <p className="text-primary hover:text-primary-focus hidden transform text-2xl font-bold transition duration-300 hover:scale-105 sm:block">
              SHOHRUH.
              <span className="hover:text-primary text-green-700">uz</span>
            </p>
          </Link>

          <div className="bg-base-100 flex h-16 items-center px-4 sm:hidden">
            <div className="dropdown h-full">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost flex h-full w-full items-center justify-center"
              >
                <FaBarsStaggered className="h-7 w-7" />
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
              
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
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <p className="text-primary hover:text-primary-focus block transform text-xl font-bold transition duration-300 hover:scale-105 sm:hidden">
            SHOHRUH.
            <span className="hover:text-primary text-green-700">uz</span>
          </p>
        </div>
        <div className="navbar-end">
          <nav className="hidden sm:block">
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
          
            <Link
              to="https://github.com/shokhruh61"
              target="_blanked"
              rel="noopener noreferrer"
            >
              <FaGithub className="ml-4 h-7 w-7" />
            </Link>
            
          
        </div>
      </header>
    </div>
  );
}

export default Header;
