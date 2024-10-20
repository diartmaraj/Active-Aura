import React from 'react';

const CostumInputText = ({ value, onChange, name, placeholder, type = 'text', className = '' }) => {
    const handleInputChange = (e) => {
        onChange(name, e.target.value);
      };
    
    return (
        <input
            type={type}
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={`w-full p-2 bg-white text-gray-700 border placeholder:text-gray-300 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
        />
    );
};

export default CostumInputText;
