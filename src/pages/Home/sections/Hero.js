import React from "react";
import Button1 from "../../../components/Button1";
import Button2 from "../../../components/Button2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { stats } from "../../../constants";
import HeroImage from "../../../assets/images/HeroImage.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full flex xl:flex-row padding-x flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-1/2 flex flex-col  justify-center items-start w-full max-xl:padding-x pt-28">
        <h1
          className="text-8xl font-bold font-palanquin xl:whitespace-nowrap max-sm:text-[72px] max-sm:leading-[82px]
        bg-gradient-to-b from-secondary_1  to-primary 
        text-transparent bg-clip-text "
        >
          ActiveAura
        </h1>
        <h1 className="text-4xl mt-4 mb-4 font-bold text-wrap z-10 text-primary">
          <span>Ignite Your Energy</span>, <br />
          <span>Shine Bright</span>
        </h1>
        <p className="text-base mb-4 text-primary max-w-sm md:max-w-md lg:max-w-lg">
          At ActiveAura, we offer premium fitness gear, wellness essentials, and
          beauty products to empower your journey to health, vitality, and
          radiance.
        </p>
        <div className="flex justify-center mb-4 items-center gap-10 ">
          <Button2
            label="Explore our products"
            icon={faArrowRight}
            color="bg-secondary_1"
          />
          <Button1 label="Log in / Sign up" />
        </div>
        <div className="flex justify-start items-start flex-wrap w-full  gap-20">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="leading-7 font-montserrat">{stat.label}</p>
              <p className="text-2xl font-palanquin font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center  xl:min-h-screen max-xl:py-40 sm:order-2">
        <img
          src={HeroImage}
          alt="Pro Balance"
          width={300}
          height={500}
          className="object-contain relative z-10 transform  -rotate-25 xl:ml-36 xl:mt-20"
        />
      </div>
    </section>
  );
};

export default Hero;
