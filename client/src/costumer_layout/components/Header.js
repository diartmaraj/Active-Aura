import React,{useState} from "react";
import Logo from "../../assets/images/logo.png";
import { Link,useLocation } from "react-router-dom";
import { navLinks } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import { IoCartOutline } from "react-icons/io5";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button1 from "./buttons/Button1";
import SideBar from "./SideBar";
import SearchSection from "./SearchSection";


const Header = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const location = useLocation();

  const toggleSideBar = () => {
    setisSideBarOpen(!isSideBarOpen);
  }
  return (
    <header className="padding-x py-4 fixed bg-white  z-20 w-full flex flex-col">
    <nav className="flex justify-between items-center xl:padding-l 2xl:pl-24 ">
      <a href="/" className="flex flex-row ml-2 items-center justify-center">
        <img src={Logo} alt="Logo"  className="max-sm:w-[60px] max-sm:h-[60px] w-[80px] h-[80px]" />
        <h1 className=" text-primary">ActiveAura</h1>
      </a>
      <ul className="flex-1 flex justify-center items-center gap-5 xl:gap-8  max-lg:hidden">
        {navLinks.map((item) => {

            const isActive = location.pathname === item.href; // Check if the link is active
            return (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`font-montserrat leading-normal text-sm xl:text-lg text-slate-gray ${
                    isActive ? "text-[16px] xl:text-xl text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
        );
        })}
      </ul>
      <div className="flex justify-between gap-8 items-center max-lg:hidden ">
      <IoCartOutline className="size-6"/>
        <Button1 label="Log in / Sign up" path="/login" extraStyle="h-12"></Button1>
      </div>
      <div className="flex justify-center items-center gap-8">
      <FontAwesomeIcon
            icon={faSearch}
            className="size-6 tablet:hidden "
            />
        <FontAwesomeIcon
          icon={faBars}
          className="size-6 lg:hidden cursor-pointer"
          onClick={toggleSideBar}
        />
        
      </div>
    </nav>
    <SideBar isOpen={isSideBarOpen} toggleSideBar={toggleSideBar}/>
    <SearchSection/>
  </header>
  )
}

export default Header