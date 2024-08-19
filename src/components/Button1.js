import React from "react";
import { useNavigate } from "react-router-dom";

const Button1 = ({ label, icon, path, extraStyle}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  }
  return (
    <button
    onClick={handleClick}
      className={`flex justify-center items-center max-sm:px-4 px-7 max-sm:h-10 h-12 border font-montserrat
     text-sm max-sm:text-[10px] lg:text-lg  bg-primary rounded-full text-white whitespace-nowrap ${extraStyle}`}
    >
      {label}
    </button>
  );
};

export default Button1;
