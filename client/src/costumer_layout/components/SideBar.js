import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const SideBar = ({ isOpen, toggleSideBar }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-[250px] h-full bg-gradient-to-b from-secondary_1 to-gray-900 text-white shadow-lg z-10 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Icon */}
      <FaTimes
        onClick={toggleSideBar}
        className="absolute top-4 right-4 text-2xl cursor-pointer hover:text-red-500 transition-colors duration-300"
      />

      {/* Sidebar Content */}
      <div className="flex flex-col justify-start items-start pt-20 px-6 w-full">
        <ul className="w-full space-y-4">
          {navLinks.map((links, index) => (
            <li
              key={index}
              className="text-lg font-semibold hover:text-primary transition-colors duration-300"
            >
              <Link
                to={links.href}
                onClick={toggleSideBar}
                className="block w-full py-2"
              >
                {links.label}
              </Link>
            </li>
          ))}
          <li className="text-lg font-semibold hover:text-primary transition-colors duration-300">
            <Link
              to="/login"
              onClick={toggleSideBar}
              className="block w-full py-2"
            >
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
