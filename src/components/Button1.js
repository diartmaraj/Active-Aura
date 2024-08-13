import React from "react";

const Button1 = ({ label, icon }) => {
  return (
    <button
      className="flex justify-center items-center  px-7 py-4 border font-montserrat
     text-lg  bg-primary rounded-full text-white"
    >
      {label}
    </button>
  );
};

export default Button1;
