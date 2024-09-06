import React from 'react';

const CustomDropdown = ({ value, options, onChange, optionLabel, placeholder, className, panelClassName, itemTemplate, valueTemplate }) => {
    return (
        <div className={`relative ${className}`}>
            <select
                value={value}
                onChange={(e) => onChange({ value: e.target.value })}
                className="w-full p-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <option value="" disabled>{placeholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option[optionLabel]}>
                        {option[optionLabel]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CustomDropdown;
