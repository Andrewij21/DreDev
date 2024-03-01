// import { BsMoonStarsFill } from "react-icons/bs";
// import { FaSun } from "react-icons/fa6";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

Navbar.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
};

const links = ["about", "services", "skills", "works"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export default function Navbar() {
  return (
    <nav className="py-10 flex justify-center relative font-semibold dark:text-white">
      {/* <h1 className=" z-10 text-xl md:text-2xl">Andre</h1> */}

      {/* <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.h1> */}
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="flex items-center w-auto md:py-0 py-4 gap-x-4"
      >
        {links.map((link, i) => (
          <motion.li key={i} variants={item} className="hover:text-cyan-500">
            <a href={`#${link}`} className="rounded-md capitalize">
              {link}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
