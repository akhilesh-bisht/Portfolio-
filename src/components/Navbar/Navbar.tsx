import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../../../public/logo.avif";

const Navbar: React.FC = () => {
  const [dateTime, setDateTime] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setDateTime(now.toLocaleString("en-US", options));
    };

    const interval = setInterval(updateDateTime, 1000);
    updateDateTime();
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      id="#"
      className="fixed  top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 dark:bg-black/30 shadow-md transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 py-2 md:py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img width={40} height={40} src={logo} alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <a
              href="#experience"
              className="hover:text-teal-400 transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-teal-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#connect"
              className="hover:text-teal-400 transition-colors"
            >
              Connect
            </a>
          </li>
        </ul>

        {/* DateTime (Hidden on mobile) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={dateTime}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="text-xs font-mono text-gray-300 hidden md:block"
          >
            {dateTime}
          </motion.div>
        </AnimatePresence>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/90 text-white backdrop-blur-md px-6 pb-4 pt-2"
          >
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li>
                <a
                  onClick={() => setIsMobileMenuOpen(false)}
                  href="#experience"
                  className="block hover:text-teal-400"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsMobileMenuOpen(false)}
                  href="#projects"
                  className="block hover:text-teal-400"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsMobileMenuOpen(false)}
                  href="#connect"
                  className="block hover:text-teal-400"
                >
                  Connect
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
