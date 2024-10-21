//rrd imports
import { Link } from "react-router-dom";

//components
import { NavLinks } from "./";

//icons
import { FaCode } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { FiSun } from "react-icons/fi";
import { PiMoon } from "react-icons/pi";

//rrd imports
import { useEffect, useState } from "react";

//framer motion
import { motion } from "framer-motion";

//local stroge

const themeFromLocalStorge = () => {
  return localStorage.getItem("theme") || "winter";
};

function Navbar() {
  const [theme, setTheme] = useState(themeFromLocalStorge());

  const toggleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <header className="align-elements">
      <div className="navbar">
        <div className="navbar-start ">
          <Link to={"/"} className="flex gap-3">
            <motion.div
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="h-7 w-7 sm:w-10 sm:h-10 bg-yellow-500 rounded-full grid place-content-center"
            >
              <FaCode className="text-slate-600" />
            </motion.div>
            <motion.p
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className=" text-lg sm:text-2xl md:sm:text-2xl italic "
            >
              mduzuser
            </motion.p>
          </Link>
        </div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="navbar-end flex gap-5"
        >
          <ul className="menu menu-horizontal hidden sm:flex">
            <NavLinks />
          </ul>

          <label className="swap swap-rotate ">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={toggleTheme} />

            {/* sun icon */}
            <FiSun className="swap-on h-6 w-6 fill-current" />

            {/* moon icon */}
            <PiMoon className="swap-off h-6 w-6 fill-current" />
          </label>

          <div className="dropdown dropdown-left sm:hidden">
            <div tabIndex={0} role="button">
              <HiBars3 className="w-7 h-7" />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Navbar;
