import React from "react";
import { benefits } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button2 from "../../../components/Button2";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaShieldAlt } from "react-icons/fa6";

const Benefits = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full padding-x background-gradient1 ">
      <div className="flex flex-col justify-center items-center gap-2 mb-10">
        <h1 className="text-3xl text-center max-sm:leading-[34px] font-montserrat text-primary">
          <span className="font-semibold">We bring the best to our </span>
          <span className="font-extrabold">clients</span>
        </h1>
        <p className="text-primary text-center text-balance">
          We are dedicated to bringing the best to our clients, helping you
          achieve optimal health and well-being. Explore our premium range today
          and experience the difference of quality and care.
        </p>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 mx-auto p-5 max-sm:p-8">
        {benefits.map((benefits, index) => (
          <div
            key={index}
            className="flex flex-row p-6 sm:rounded-full rounded-[16px] shadow-lg bg-secondary_1 h-44 "
          >
            <div className="flex items-center justify-center gap-4 h-full">
           
              <FontAwesomeIcon
                icon={benefits.icon}
                className="rounded-full self-center bg-white p-5 w-12 h-12 max-sm:p-4 max-sm:w-4 max-sm:h-4"
              />
              
              </div>

              <div className="flex flex-col justify-start p-2 text-left gap-2 ml-4 ">
                <h1 className="max-sm:text-[14px] max-sm:leading-[18px] text-[18px] leading-[22px] font-semibold text-white">
                  {benefits.title}
                </h1>
                <p className="max-sm:text-[10px] text-xs text-white ">
                  {benefits.description}
                </p>
              </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
      <Button2
        label="Explore our Products"
        icon={faArrowRight}
        color="bg-secondary_2"
      />
      </div>
    </section>
  );
};

export default Benefits;
