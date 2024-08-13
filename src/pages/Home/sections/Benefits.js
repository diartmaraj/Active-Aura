import React from "react";
import { benefits } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button2 from "../../../components/Button2";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Benefits = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full max-container background-gradient1 ">
      <div className="flex flex-col justify-center items-center gap-2 mb-10">
        <h1 className="text-3xl font-montserrat text-primary">
          <span className="font-semibold">We bring the best to our </span>
          <span className="font-extrabold">clients</span>
        </h1>
        <p className="text-primary text-center text-balance">
          We are dedicated to bringing the best to our clients, helping you
          achieve optimal health and well-being. Explore our premium range today
          and experience the difference of quality and care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto p-5">
        {benefits.map((benefits, index) => (
          <div
            key={index}
            className="flex flex-col p-6 rounded-full shadow-lg bg-secondary_1 justify-between"
          >
            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={benefits.icon}
                className="rounded-full bg-white p-8 w-8 h-8"
              />
              <div className="flex flex-col justify-start items-start text-left  gap-2 ">
                <h1 className="text-2xl font-semibold text-white">
                  {benefits.title}
                </h1>
                <p className="text-xs text-white text-balance">
                  {benefits.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button2
        label="Explore our Products"
        icon={faArrowRight}
        color="bg-secondary_2"
      />
    </section>
  );
};

export default Benefits;
