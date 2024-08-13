import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const AddToCartButton = ({ label }) => {
  return (
    <button
      className=" flex justify-center items-center py-2 mt-4 font-montserrat
     text-md text-secondary_1 "
    >
      {label}
      <FontAwesomeIcon
        icon={faChevronRight}
        className="ml-2 rounded-full w-4 h-4"
      />
    </button>
  );
};

export default AddToCartButton;
