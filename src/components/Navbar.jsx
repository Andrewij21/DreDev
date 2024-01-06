import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";

import PropTypes from "prop-types";

Navbar.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
};

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="py-10 flex justify-between relative font-semibold dark:text-white">
      {/* <h1 className=" z-10 text-xl md:text-2xl">Andre</h1> */}

      <h1 className="">
        {darkMode ? (
          <FaSun
            className="cursor-pointer text-2xl fill-yellow-300"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <BsMoonStarsFill
            className="cursor-pointer text-2xl  "
            onClick={() => setDarkMode(!darkMode)}
          />
        )}
      </h1>
      <ul className="flex items-center w-auto md:py-0 py-4 gap-x-4">
        <li className="hover:text-cyan-500">
          <a href="#about" className="rounded-md">
            About
          </a>
        </li>
        <li className="hover:text-cyan-500">
          <a href="#services" className="rounded-md ">
            Services
          </a>
        </li>
        <li className="hover:text-cyan-500">
          <a href="#skills" className="rounded-md ">
            Skills
          </a>
        </li>
        <li className="hover:text-cyan-500">
          <a href="#experience" className="rounded-md ">
            Experiences
          </a>
        </li>
        <li className="hover:text-teal-500">
          <a href="#portofolio" className="rounded-md ">
            Works
          </a>
        </li>
      </ul>
    </nav>
  );
}
