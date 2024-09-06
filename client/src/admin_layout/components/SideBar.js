import React from 'react';
import { FaChartPie, FaHome, FaBox, FaShoppingCart, FaUsers, FaChartBar, FaCogs, FaQuestionCircle } from 'react-icons/fa'; // Importing Font Awesome icons
import logo from '../../assets/images/logo.png';
import { adminLinks } from '../../constants';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="fixed min-h-screen inset-y-0 left-0 w-12 bg-white shadow-md p-4 flex flex-col justify-between md:w-80 lg:w-64 xl:w-80 z-30 lg:relative lg:inset-0">
      {/* Top Section: Logo and Navigation Links */}
      <div>
        {/* Logo */}
        <div className="flex items-center space-x-2 p-4">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
          <span className="text-xl font-semibold text-primary hidden lg:block">ActiveAura</span>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className='space-y-4'>
            {adminLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className='flex items-center p-2 rounded-md text-black hover:text-white hover:bg-secondary_1'>
                  <span className='mr-3'>{link.icon}</span>
                  <span className='hidden lg:inline'>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Section: Settings and Help */}
      <div className="mt-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-2 rounded-md text-black hover:text-white hover:bg-secondary_1">
              <FaQuestionCircle className="text-lg mr-3" />
              <span className='hidden lg:inline'>Help</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-md text-black hover:text-white hover:bg-secondary_1">
              <FaCogs className="text-lg mr-3" />
              <span className='hidden lg:inline'>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
