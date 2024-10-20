import React from 'react';

const CostumDropdown = ({
    value,
    options = [],
    onChange,
    optionLabel,
    placeholder,
    className,
}) => {
    return (
        <div className={`relative ${className}`}>
            <select
                value={value} // Ensure this matches the selected value
                onChange={(e) => {
                    const selectedValue = e.target.value;
                    const selectedOption = options.find(option => option.value === selectedValue);
                    onChange(selectedOption); // Pass the entire option object to onChange
                }}
                className="w-full p-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <option value="" disabled hidden>{placeholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option[optionLabel]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CostumDropdown;
