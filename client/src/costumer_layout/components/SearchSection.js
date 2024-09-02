import React, { useState } from 'react'
import { InputText } from "primereact/inputtext";
import {CiFilter} from 'react-icons/ci';
import DiartiProfile from "../assets/images/DiartiProfile.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import Button1 from './buttons/Button1';
import ProfileDropdown from './ProfileDropdown';
import { BiCategory } from "react-icons/bi";
import FilterCategory from './FilterCategory';

const SearchSection = () => {
  const [ProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setProfileDropdownOpen(!ProfileDropdownOpen);
  };

  return (
    <div className="flex relative justify-center gap-6 items-center pt-6">
    <div className="relative  sm:w-3/5 md:w-3/5 lg:w-1/2 max-tablet:invisible">
        <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 "
            />
      <InputText
        type="text"
        className="pl-10 h-10 2xl:h-14 rounded-full py-3 px-4 shadow-md w-full max-tablet:placeholder:text-[8px] placeholder:text-[10px] text-sm "
        placeholder="What are you looking for today?"
      />

      <Button1 label="Search" extraStyle="h-10 2xl:h-14 text-base absolute right-0 top-1/2  transform -translate-y-1/2"/>
      
    </div>
    <div  className="absolute bottom-0 right-0">
    <img
          src={DiartiProfile}
          alt="Profile"
          className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full object-cover cursor-pointer"
          onClick={toggleDropdown}
        />
    </div>
<ProfileDropdown isOpen={ProfileDropdownOpen}  user={{profilePicture: DiartiProfile, name: "Diart Maraj", email: "diartmarajj@outlook.com"}}/>

</div>
  )
}

export default SearchSection