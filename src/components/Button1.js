import React from "react";

const Button1 = ({ label, icon }) => {
  return (
    <button
      className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat
     text-lg leading-none bg-primary rounded-full text-white"
    >
      {label}
    </button>
  );
};

export default Button1;
