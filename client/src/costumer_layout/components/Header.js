import React,{useState, useEffect} from "react";
import Logo from "../../assets/images/logo.png";
import { Link,useLocation } from "react-router-dom";
import { navLinks } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import { IoCartOutline,IoHeartOutline } from "react-icons/io5";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button1 from "./buttons/Button1";
import SideBar from "./SideBar";
import SearchSection from "./SearchSection";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth } from "../../store/features/auth/authSlice";


const Header = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, user, isCheckingAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  
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

            const isActive = location.pathname === item.href;
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
      <div className="flex justify-between gap-4 items-center max-lg:hidden ">
        <div className="flex items-center gap-4">
            <IoCartOutline className="size-6" />
            <IoHeartOutline className="size-6"/>
          </div>
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