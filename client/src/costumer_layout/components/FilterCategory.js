import React,{useState} from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { productType } from "../constants";
import { IoClose, IoChevronDown, IoChevronUp } from 'react-icons/io5';


const FilterCategory = ({isOpen, toggleFilterCategory}) => {
    const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionName) => {
    setOpenSections((prevSections) => ({
      ...prevSections,
      [sectionName]: !prevSections[sectionName],
    }));
  };
  return (
    <div
      className={`fixed top-0 left-0 w-[250px] h-full bg-gradient-to-b from-secondary_1 to-gray-900 text-white shadow-lg z-10 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Icon */}
      <FaTimes
        onClick={toggleFilterCategory}
        className="absolute top-4 left-4 text-2xl cursor-pointer hover:text-red-500 transition-colors duration-300"
      />

      {/* Sidebar Content */}
      <div className="flex flex-col gap-4 pt-20 ">
        {productType.map((category, index) => (
          <div key={index} className="flex flex-col border-b pb-2 mb-2 px-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(category.name)}
            >
              <label className="block text-sm font-medium text-white">{category.name}</label>
              {openSections[category.name] ? (
                <IoChevronUp size={16} />
              ) : (
                <IoChevronDown size={16} />
              )}
            </div>
            {openSections[category.name] && (
              <div className="flex flex-col mt-2 pl-2">
                {category.subcategories ? (
                  category.subcategories.map((subcategory, subIndex) => (
                    <label key={subIndex} className="inline-flex items-center mt-1">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" />
                      <span className="ml-2 text-sm text-white">{subcategory.name}</span>
                    </label>
                  ))
                ) : (
                  <label className="inline-flex items-center mt-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" />
                    <span className="ml-2 text-sm text-white">{category.name}</span>
                  </label>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterCategory