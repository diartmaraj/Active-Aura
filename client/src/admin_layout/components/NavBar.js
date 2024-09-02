import React from 'react';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { FaSearch } from 'react-icons/fa';
import { InputText } from 'primereact/inputtext';
import Button1 from './buttons/Button1';

const layoutOptions = [
    { label: 'Electronics', icon: '📱' },
    { label: 'Fashion', icon: '👗' },
    { label: 'Home & Living', icon: '🏠' },
  ];
const NavBar = () => {
    const [layout, setLayout] = useState(null);
  return (
    <div className='flex items-center justify-between p-4'>
    {/* Left section: Dropdown for Category Selection */}
    <div className='flex items-center'>
      <Dropdown
        value={layout}
        options={layoutOptions}
        onChange={(e) => setLayout(e.value)}
        optionLabel="label"
        placeholder="Select Category"
        className="w-40 p-1 bg-white text-gray-700  "
        panelClassName="bg-white p-2 border border-gray-300 shadow-lg rounded-md"
        itemTemplate={(option) => (
          <div className="flex items-center">
            <span className="mr-2">{option.icon}</span>
            <span>{option.label}</span>
          </div>
        )}
        valueTemplate={(option) => option ? <span className='text-md'><span className='mr-2'>{option.icon}</span>{option.label}</span> : <span className='text-md'>Select Category</span>}
      />
    </div>

    {/* Middle section: Search Bar */}
    <div className="relative  sm:w-3/5 md:w-3/5 lg:w-1/2 max-tablet:invisible">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 "/>
      <InputText
        type="text"
        className="pl-10 h-10 2xl:h-14 rounded-2xl py-3 px-4 shadow-md w-full max-tablet:placeholder:text-[8px] placeholder:text-[10px] text-sm "
        placeholder="What are you looking for today?"
      />

      <Button1 label="Search" extraStyle="h-10 2xl:h-14 text-base absolute right-0 top-1/2 rounded-2xl  transform -translate-y-1/2"/>
      
    </div>

    {/* Right section: Notification, Profile Menu */}
    <div className='flex items-center space-x-4'>
      <div className='relative'>
        <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
          <span className="sr-only">View notifications</span>
          {/* Notification Icon */}
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 7 7.388 7 9v5.159c0 .538-.214 1.055-.595 1.436L5 17h10z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 21a2 2 0 11-4 0" />
          </svg>
        </button>
        {/* Notification Badge */}
        <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full"></span>
      </div>

      <div className='relative'>
        {/* Profile Menu Button */}
        <button className="p-2 rounded-2xl hover:bg-gray-100 focus:outline-none">
          <span className="sr-only">Open user menu</span>
          {/* Profile Icon */}
          <img className="w-8 h-8 rounded-xl object-contain" src="https://via.placeholder.com/150" alt="User profile" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default NavBar