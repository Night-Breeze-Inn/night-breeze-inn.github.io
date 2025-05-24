import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleExclamation, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const activeClass = "active";

  return (
    <header className="flex flex-col items-center justify-around bg-gray-100 p-4 text-primary-600 shadow-md md:flex-row">
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? "" : ""}m-3 flex flex-row items-center text-2xl font-bold`}>
        <img src="/images/Logo.png" alt="Logo" className="mr-2 h-14 w-14" />
        <span>Nightbreeze Inn</span>
      </NavLink>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? activeClass : ""} hover:border-b-2 hover:border-primary-500 hover:text-primary-500`
              }
              end>
              <FontAwesomeIcon icon={faHouse} className="ml-1 mr-1" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? activeClass : ""} hover:border-b-2 hover:border-primary-500 hover:text-primary-500`
              }
              end>
              <FontAwesomeIcon icon={faCircleExclamation} className="ml-1 mr-1" />
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? activeClass : ""} hover:border-b-2 hover:border-primary-500 hover:text-primary-500`
              }
              end>
              <FontAwesomeIcon icon={faEnvelope} className="ml-1 mr-1" />
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-4 flex space-x-4 md:mt-0">
        <a href="https://github.com/Night-Breeze-Inn/night-breeze-inn.github.io">
          <img src="/github/github-mark.svg" alt="GitHub" className="inline-block h-6 w-6" />
        </a>
      </div>
    </header>
  );
}

export default Header;
