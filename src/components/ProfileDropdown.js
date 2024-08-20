import React from 'react'
import { Link } from 'react-router-dom'

const ProfileDropdown = ({isOpen, user}) => {
  return (
    <div className={`bg-gradient-to-b from-secondary_1 to-gray-900 shadow-lg rounded-lg w-fit py-4 top-10 absolute right-0 mt-2 z-10 transform transition-transform duration-300 ${isOpen ? "visible" : "hidden"} `}>
      <div className="flex items-center px-4 mb-2">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="font-semibold text-white">{user.name}</p>
          <p className="text-sm text-white  ">{user.email}</p>
        </div>
      </div>

      <ul className="text-sm text-white">
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link to="/account">Account Settings</Link>
        </li>
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link to="/order-history">Order History</Link>
        </li>
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link to="/wishlist">Wishlist</Link>
        </li>
      </ul>

      <div className="border-t mt-2"></div>

      <div className="hover:bg-gray-100 px-4 py-2">
        <button className="text-red-500 text-sm font-semibold w-full text-left">
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileDropdown