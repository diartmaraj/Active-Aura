import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button1 from "./Button1";
import { useNavigate } from "react-router-dom"; 
import { InputText } from "primereact/inputtext";
import {CiFilter} from 'react-icons/ci';
import DiartiProfile from "../assets/images/DiartiProfile.jpg"

const Header = () => {
  return (
    <header className="padding-x py-4 absolute z-10 w-full flex flex-col">
    <nav className="flex justify-between items-center xl:padding-l 2xl:pl-24 ">
      <a href="/" className="flex flex-row ml-2 items-center justify-center">
        <img src={Logo} alt="Logo"  className="max-sm:w-[60px] max-sm:h-[60px] w-[80px] h-[80px]" />
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
        <FontAwesomeIcon icon={faCartShopping} className="size-6" />
        <Button1 label="Log in / Sign up" path="/login"></Button1>
      </div>
      <div >
        
        <FontAwesomeIcon
          icon={faBars}
          className="size-6 lg:hidden"
        />
        
      </div>
    </nav>
    <div className="flex  justify-center gap-6 items-center mt-4 ">
        <CiFilter className="h-6 w-6 ml-5"/>
        <div className="relative w-10/12 md:w-96">
            <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 "
                />
          <InputText
            type="text"
            className="pl-10 rounded-full py-3 px-4 shadow-md w-full text-[8px]"
            placeholder="What are you looking for today?"
          />

          <Button1 label="Search" extraStyle="absolute right-0 top-1/2   transform -translate-y-1/2"/>
          
        </div>
        <svg
  width="50"
  height="50"
  xmlns="http://www.w3.org/2000/svg"
  className="flex justify-center items-center"
        >
  <clipPath id="circleClip">
    <circle cx="25" cy="25" r="15" />
  </clipPath>
  <image
    href={DiartiProfile}
    x="0"
    y="0"
    width="50"
    height="50"
    preserveAspectRatio="xMidYMid slice"
    clipPath="url(#circleClip)"
  />
</svg>

    </div>
  </header>
  )
}

export default Header