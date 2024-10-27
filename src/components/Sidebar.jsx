import React, { useState } from "react";
import {
  FaHome,
  FaHashtag,
  FaClipboardList,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FcContacts, FcAbout } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const HandleToggle = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Hamburger menu for mobile */}
      <button
        className="fixed top-3 left-8 z-50 block lg:hidden text-black"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed lg:relative w-64 h-full  text-gray-300 p-3 transform transition-transform duration-300 ease-in-out lg:translate-x-0 z-40`}
      >
        {/* Sidebar Header */}
        <div className=" lg:flex gap-2 ml-4 mb-2 hidden">
          <div className="h-4 w-4 rounded-full bg-green-600"></div>
          <div className="h-4 w-4 rounded-full bg-green-600"></div>
        </div>

        <div className="space-y-4 p-4 text-lg rounded-2xl bg-gray-800 h-full">
          {/* Navigation Links */}
          <ul className="space-y-2 flex flex-col gap-6">
            <li className="flex items-center space-x-2 justify-start gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center justify-start gap-3 text-xl ${
                    isActive ? "text-orange-600" : "text-white"
                  }`
                }
                onClick={HandleToggle}
              >
                <FaHome className="text-orange-500" />
                <span>Home</span>
              </NavLink>
            </li>
            <li className="flex items-center space-x-2">
              <NavLink
                to="/skill"
                className={({ isActive }) =>
                  `flex items-center justify-start gap-3 text-xl ${
                    isActive ? "text-orange-600" : "text-white"
                  }`
                }
                onClick={HandleToggle}
              >
                <GiSkills className="text-black" />
                <span>Skill</span>
              </NavLink>
            </li>
            <li className="flex items-center space-x-2">
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `flex items-center justify-start gap-3 text-xl ${
                    isActive ? "text-orange-600" : "text-white"
                  }`
                }
                onClick={HandleToggle}
              >
                <AiFillProject />
                <span>Projects</span>
              </NavLink>
            </li>
            <li className="flex items-center space-x-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center justify-start gap-3 text-xl ${
                    isActive ? "text-orange-600" : "text-white"
                  }`
                }
                onClick={HandleToggle}
              >
                <FcAbout />
                <span>About</span>
              </NavLink>
            </li>
          </ul>

          {/* Social Links */}
          <div className="text-lg font-semibold">Socials</div>
          <ul className="space-y-2 flex flex-col gap-6">
            <li className="flex items-center space-x-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center justify-start gap-3 text-xl ${
                    isActive ? "text-orange-600" : "text-white"
                  }`
                }
                onClick={HandleToggle}
              >
                <FcContacts className="text-blue-500" />
                <span>Contact Me</span>
              </NavLink>
            </li>
            <li className="flex items-center space-x-2">
              <NavLink
                to="https://github.com/akhilesh-bisht"
                className={({ isActive }) =>
                  `flex items-center justify-start gap-3 text-xl ${
                    isActive ? "text-orange-600" : "text-white"
                  }`
                }
                onClick={HandleToggle}
              >
                <FaGithub className="text-black" />
                <span>Github</span>
              </NavLink>
            </li>
            <li className="flex items-center space-x-2">
              <FaSquareXTwitter />
              <span>Twiter</span>
            </li>
            <li className="flex items-center space-x-2">
              <NavLink
                to="https://www.linkedin.com/in/akhilesh-bisht-a76981291/"
                className="items-center flex justify-start gap-3 text-xl"
              >
                <FaLinkedin className="text-green-500" />
                <span>LinkedIn</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
