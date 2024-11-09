import React, { useState, useEffect } from 'react'
import { InputText } from "primereact/inputtext";
import {CiFilter} from 'react-icons/ci';
import DiartiProfile from "../../assets/images/DiartiProfile.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import Button1 from './buttons/Button1';
import ProfileDropdown from './profile/ProfileDropdown';
import { BiCategory } from "react-icons/bi";
import FilterCategory from './FilterCategory';
import { useDispatch , useSelector} from 'react-redux';
import { checkAuth } from '../../store/features/auth/authSlice';
import { logout } from '../../store/features/auth/authSlice';


const SearchSection = () => {
  const [ProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user, isCheckingAuth } = useSelector((state) => state.auth);
  const baseURL = "http://localhost:5000";
  
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const toggleDropdown = () => {
    setProfileDropdownOpen(!ProfileDropdownOpen);
  };
  const handleLogout = () => {
    dispatch(logout());
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
    {isAuthenticated ? (
            <div className="relative flex items-center gap-4">
              <img
                src={`${baseURL}${user.photo}`} // Assuming user.photo contains the URL of the user's photo
                alt="Profile"
                className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full object-cover cursor-pointer"
                onClick={toggleDropdown}
              />
              <ProfileDropdown isOpen={ProfileDropdownOpen} user={user} onLogout={handleLogout} />
            </div>
    ) : ''}
    </div>
<ProfileDropdown isOpen={ProfileDropdownOpen}  user={{profilePicture: DiartiProfile, name: "Diart Maraj", email: "diartmarajj@outlook.com"}}/>

</div>
  )
}

export default SearchSection