import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import andre from "/photo1.jpg";
import PropTypes from "prop-types";

Navbar.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
};

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <section className="min-h-screen ">
      <nav className="py-10 mb-12 flex items-center justify-between relative">
        <h1 className=" z-10 text-xl md:text-2xl dark:text-white">
          DevelopedByDre
        </h1>

        <ul className="md:flex md:items-center md:w-auto md:py-0 py-4 hidden">
          <li className="">
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
          </li>
          <li className="">
            <a
              href="#"
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center p-10" id="home">
        <h2 className="text-5xl text-teal-600 py-2 font-medium md:text-6xl">
          Andre Wijaya
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          Fullstack Developer
        </h3>
        <p className="text-md  py-5 text-gray-800 leading-8 md:text-xl max-w-lg mx-auto dark:text-white">
          Learning new stuff always fun for me, especially when it comes to
          software development, Boi what a joy...
        </p>
      </div>
      <div className="flex text-5xl py-3 justify-center gap-16 text-gray-600">
        <a
          href="https://www.instagram.com/andrewijaya_21/"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillInstagram className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/andre-wijaya-366911256/"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/Andrewij21"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineGithub />
        </a>
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-20 mx-auto overflow-hidden md:h-96 md:w-96">
        <img src={andre} alt="andre" className="object-cover" />
      </div>
    </section>
  );
}
