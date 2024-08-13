import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button2 = ({ label, icon, color }) => {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 border font-montserrat
     text-lg ${color} rounded-full text-white`}
    >
      {label}
      <FontAwesomeIcon icon={icon} className="ml-2 rounded-full w-5 h-5 " />
    </button>
  );
};

export default Button2;
