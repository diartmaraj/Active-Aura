import React from 'react'
import { Link } from 'react-router-dom'
import { MdPersonOutline } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import logo from '../../../assets/images/logo.png'

const baseURL = "http://localhost:3001";
const ProfileDropdown = ({isOpen, user, onLogout}) => {
  
  return (
    <div className={`bg-gradient-to-b from-secondary_1 to-gray-900 shadow-lg rounded-lg w-fit py-4 top-[60px] 2xl:top-20 
     absolute right-0 mt-2 z-10 transform transition-transform duration-300 ${isOpen ? "visible" : "hidden"} `}>
      <div className="flex items-center px-4 mb-2">
        <img
          src={`${baseURL}${user.photo}`}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="font-semibold text-white">{user?.name}</p>
          <p className="text-sm text-white  ">{user?.email}</p>
        </div>
      </div>

      <ul className="text-sm text-white">
        <li className="hover:bg-secondary_1 px-4 py-2 cursor-pointer">
          <Link to="/settings" className='flex items-center' ><MdPersonOutline className='mr-2 size-5'/>Account Settings</Link>
        </li>
        <li className="hover:bg-secondary_1 px-4 py-2 cursor-pointer">
          <Link to="/order-history" className='flex items-center'><LuHistory className='mr-2 size-5'/>Order History</Link>
        </li>
        <li className="hover:bg-secondary_1 px-4 py-2 cursor-pointer">
          <Link to="/wishlist" className='flex items-center'><FaRegHeart className='mr-2 size-5'/>Wishlist</Link>
        </li>
      </ul>

      <div className="border-t mt-2"></div>

      <div className="hover:bg-gray-100 px-4 py-2">
        <button onClick={onLogout} className="text-red-500 text-sm font-semibold w-full text-left flex items-center">
        <MdLogout className='mr-2 size-5' />Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileDropdown