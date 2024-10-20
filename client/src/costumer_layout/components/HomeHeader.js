import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoCartOutline } from "react-icons/io5";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button1 from "./buttons/Button1";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { logout, checkAuth } from "../../store/features/auth/authSlice";
import ProfileDropdown from "./profile/ProfileDropdown";

const baseURL = "http://localhost:5000";

function HomeHeader() {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [ProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user, isCheckingAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const toggleDropdown = () => {
    setProfileDropdownOpen(!ProfileDropdownOpen);
  };

  const toggleSideBar = () => {
    setisSideBarOpen(!isSideBarOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isCheckingAuth) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  return (
    <header className="padding-x py-4 absolute z-10 w-full ">
      <nav className="flex justify-between items-center xl:padding-l 2xl:pl-24 ">
        <a href="/" className="flex flex-row ml-2 items-center justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="max-sm:w-[60px] max-sm:h-[60px] w-[80px] h-[80px]"
          />
          <h1 className=" text-primary">ActiveAura</h1>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-5 xl:gap-8  max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="font-montserrat leading-normal text-sm xl:text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-between gap-8 items-center max-lg:hidden ">
          <IoCartOutline className="size-6" />
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
          ) : (
            <Button1 label="Log in / Sign up" path="/login" extraStyle="h-12" />
          )}
        </div>
        <div>
          <FontAwesomeIcon
            icon={faBars}
            className="size-6 lg:hidden cursor-pointer"
            onClick={toggleSideBar}
          />
        </div>
      </nav>
      <SideBar isOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
    </header>
  );
}

export default HomeHeader;
