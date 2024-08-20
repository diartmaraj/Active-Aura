import React, { useState } from 'react'
import { InputText } from "primereact/inputtext";
import {CiFilter} from 'react-icons/ci';
import DiartiProfile from "../assets/images/DiartiProfile.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import Button1 from './Button1';
import ProfileDropdown from './ProfileDropdown';

const SearchSection = () => {
  const [ProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setProfileDropdownOpen(!ProfileDropdownOpen);
  };

  return (
    <div className="flex relative justify-between gap-6 items-center mt-10 ">
    <CiFilter className=" size-8 ml-5 "/>
    <div className="relative sm:w-3/5 md:w-3/5 lg:w-1/2 max-sm:invisible">
        <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 "
            />
      <InputText
        type="text"
        className="pl-10 h-10 rounded-full py-3 px-4 shadow-md w-full text-[8px] "
        placeholder="What are you looking for today?"
      />

      <Button1 label="Search" extraStyle="h-10 text-base absolute right-0 top-1/2  transform -translate-y-1/2"/>
      
    </div>
    <div  className="">
    <img
          src={DiartiProfile}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
          onClick={toggleDropdown}
        />
    </div>
<ProfileDropdown isOpen={ProfileDropdownOpen}  user={{profilePicture: DiartiProfile, name: "Diart Maraj", email: "diartmarajj@outlook.com"}}/>

</div>
  )
}

export default SearchSection