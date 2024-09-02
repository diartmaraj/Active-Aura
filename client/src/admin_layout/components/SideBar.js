import React from 'react';
import {FaChartPie, FaHome, FaBox, FaShoppingCart, FaUsers, FaChartBar, FaCogs, FaQuestionCircle } from 'react-icons/fa'; // Importing Font Awesome icons
import logo from '../assets/logo.png';
import { adminLinks } from '../constants';

const SideBar = () => {
  return (
    <div className="fixed h-full  p-4 flex flex-col justify-between">
      {/* Top Section: Logo and Navigation Links */}
      <div>
        {/* Logo */}
        <div className="flex items-center space-x-2 p-4">
          <div className="flex flex-row ml-2 items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="max-sm:w-[60px] max-sm:h-[60px] w-[80px] h-[80px]"
          />
            
          </div>
          <span className="text-xl font-semibold text-primary">ActiveAura</span>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6">
        <ul className='space-y-4'>
          {adminLinks.map((link, index) => (
            <li key={index} >
              <a href={link.href} className='flex items-center p-2 rounded-md text-black hover:text-white hover:bg-secondary_1'>
                <span className='mr-3'>{link.icon}</span>
                {link.label}
              </a>
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
              <FaQuestionCircle className="text-lg  mr-3" />
              Help
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-md text-black hover:text-white hover:bg-secondary_1">
              <FaCogs className="text-lg  mr-3" />
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar