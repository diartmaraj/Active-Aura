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
      <div className="relative xl:w-2/5 flex flex-col  justify-center items-start w-full max-xl:padding-x pt-28">
        <h1
          className="text-8xl font-bold font-palanquin xl:whitespace-nowrap max-sm:text-[72px] max-sm:leading-[82px]
        bg-gradient-to-b from-primary  to-dark-green
        text-transparent bg-clip-text "
        >
          Perfect Balance
        </h1>
        <p className="text-4xl mt-4 mb-4 font-bold xl:whitespace-nowrap text-dark-green">
          Balancing Life, Naturally
        </p>
        <p className="text-base mb-4 text-dark-green">
          At Perfect Balance, we bring you the finest natural supplements,
          skincare, and wellness essentials to nurture your body, mind, and
          spirit.
        </p>
        <div className="flex justify-start mb-4 items-center gap-10 ">
          <Button2 label="Explore our products" icon={faArrowRight} />
          <Button1 label="Log in / Sign up" />
        </div>
        <div className="flex justify-start items-start flex-wrap w-full  gap-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="leading-7 font-montserrat">{stat.label}</p>
              <p className="text-2xl font-palanquin font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1  flex justify-center ml-60 mt-10 items-center">
        <img
          src={HeroImage}
          alt="Pro Balance"
          width={320}
          height={500}
          className="object-contain relative z-10 transform -rotate-25"
        />
      </div>
    </section>
  );
};

export default Hero;
