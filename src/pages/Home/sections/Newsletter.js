import React from "react";
import { InputText } from "primereact/inputtext";
import Button1 from "../../../components/Button1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MasterMindRed from "../../../assets/images/MasterMindRed.png";
import MasterMindGold from "../../../assets/images/MasterMindGold.png";

const Newsletter = () => {
  return (
    <section className="relative flex flex-col justify-center items-center background-gradient2 pb-64 tablet:pb-32 overflow-hidden">
      <div className="flex flex-col justify-center items-center pb-6">
        <h1 className="text-3xl font-bold">
          <span className="text-primary">Join in and get </span>
          <span className="text-secondary_2">25% OFF!</span>
        </h1>
        <p className="text-sm text-primary">
          Subscribe to our newsletter and get 25% OFF discount code
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative w-full md:w-96">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 "
          />
          <InputText
            type="text"
            className="pl-10 rounded-full py-3 px-4 shadow-md w-full text-sm"
            placeholder="Email address"
          />
        </div>
        <Button1 label="Subscribe" />
      </div>
    <div className="">
      <img
        src={MasterMindGold}
        alt="Master Mind Gold"
        className="h-72 object-cover transform rotate-25 absolute -left-16 top-32 tablet:top-0 max-w-none"
      />

      <img
        src={MasterMindRed}
        alt="Master Mind Red"
        className="h-72 object-cover transform -rotate-25 absolute -right-16 top-32 tablet:top-0 max-w-none"
      />
      </div>
    </section>
  );
};

export default Newsletter;
