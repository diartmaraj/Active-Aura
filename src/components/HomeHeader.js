import React from "react";
import Logo from "../assets/images/logo.png";
import { navLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button1 from "./Button1";

function HomeHeader() {
  return (
    <header className="padding-x py-4 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex flex-row ml-2">
          <img src={Logo} alt="Logo" width={80} height={80} />
          <h1 className="self-center text-primary">ActiveAura</h1>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-8 max-md:hidden max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-between gap-8 items-center max-lg:hidden ">
          <FontAwesomeIcon icon={faCartShopping} className="size-6" />
          <Button1 label="Log in / Sign up"></Button1>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faBars}
            className="size-6 hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
}

export default HomeHeader;
