import React from "react";
import { useNavigate } from "react-router-dom";

const Button1 = ({ type, label, path, extraStyle, onClick}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (path) {
      navigate(path);
    } else if (onClick) {
      onClick();
    }
    
  }
  return (
    <button type={type}
    onClick={handleClick}
      className={`flex justify-center items-center max-sm:px-4 px-7 max-sm:h-10  border font-montserrat
     text-sm max-sm:text-[12px] lg:text-lg  bg-primary rounded-full text-white whitespace-nowrap ${extraStyle}`}
    >
      {label}
    </button>
  );
};

export default Button1;
