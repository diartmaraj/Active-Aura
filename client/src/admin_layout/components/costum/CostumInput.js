import React from 'react';

const CustomInputText = ({ value, onChange, placeholder, type = 'text', className = '' }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full p-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
        />
    );
};

export default CustomInputText;
