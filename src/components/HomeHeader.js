import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button1 from "./Button1";
import { useNavigate } from "react-router-dom";

function HomeHeader() {

  return (
    <header className="padding-x py-4 absolute z-10 w-full ">
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
    </header>
  );
}

export default HomeHeader;
