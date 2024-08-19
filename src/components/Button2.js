import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Button2 = ({ label, icon, color, type, extraStyle, path}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  }
  return (
    <button type={type}
      onClick={handleClick}
      className={`flex justify-center items-center max-sm:px-4 px-7 max-sm:h-10 h-12 border font-montserrat
     text-sm max-sm:text-[10px] lg:text-lg  ${color} rounded-full text-white whitespace-nowrap ${extraStyle}`}
    >
      {label}
      <FontAwesomeIcon icon={icon} className="ml-2 rounded-full max-sm:w-4 max-sm:h-4 w-5 h-5 " />
    </button>
  );
};

export default Button2;
