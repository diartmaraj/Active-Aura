import { InputText } from "primereact/inputtext";

import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";
import Background from "../../../assets/images/BackgroundImg.avif";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Button2 from "../../components/buttons/Button2";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

const Login = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start h-screen w-full">
      <div className="lg:bg-white max-md:w-3/4 pb-10 z-10 lg:h-full flex flex-col items-center justify-center w-1/2 max-lg:rounded-lg shadow-lg border bg-black bg-opacity-30">
        <Link
          to="/"
          className="absolute top-4 left-3 flex justify-center items-center text-white lg:text-black"
        >
          <IoIosArrowBack className="mr-2 " />
          <p className="max-sm:text-sm">Back to Home Page</p>
        </Link>
        <LoginForm />
        <SocialLogin />
      </div>
      <div className="hidden lg:flex lg:flex-col lg:w-1/2 lg:justify-center lg:items-center lg:z-10 lg:h-full">
        <h1 className="text-4xl text-white mb-4">New to ActiveAura?</h1>
        <p className="text-base text-center px-10 text-white mb-10">
          Join us today to unlock exclusive benefits and start your journey to
          optimal health and wellness!
        </p>
        <Button2
          label="Create an account"
          icon={faArrowRight}
          color="bg-white"
          extraStyle="bg-opacity-20 w-1/2 h-12"
          path="/signUp"
        />
      </div>
      <div className="absolute inset-0">
        <img
          src={Background}
          alt="background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </section>
  );
};

export default Login;
