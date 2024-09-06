import React from "react";
import Button1 from "../../../components/buttons/Button1";
import Button2 from "../../../components/buttons/Button2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { stats } from "../../../../constants";
import HeroImage from "../../../../assets/images/HeroImage.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className=" w-full flex padding-x flex-col tablet:flex-row justify-center  min-h-screen gap-10 tablet:padding-b  "
    >
      <div className="relative flex flex-1 flex-col justify-center sm:items-center sm:text-center tablet:items-start tablet:text-start w-full pt-32 ">
        <h1
          className="max-sm:text-[56px] max-sm:leading-[62px] text-[76px] leading-[82px] xl:text-[92px] xl:leading-[98px]  font-bold font-palanquin 
        bg-gradient-to-b from-secondary_1  to-primary 
        text-transparent bg-clip-text "
        >
          Active Aura
        </h1>
        <h1 className="max-sm:text-[24px] max-sm:leading-[30px] text-[38px] xl:text-[54px] xl:leading-[60px] leading-[44px] mt-4 mb-4 font-bold  text-primary flex flex-col">
          <span>Ignite Your Energy,</span>
          <span>Shine Bright</span>
        </h1>
        <p className="max-sm:text-sm text-base  mb-6 text-primary max-w-sm md:max-w-md lg:max-w-lg">
          At ActiveAura, we offer premium fitness gear, wellness essentials, and
          beauty products to empower your journey to health, vitality, and
          radiance.
        </p>
        <div className="flex max-[350px]:block  justify-start mb-6  gap-4 max-sm:gap-2 ">
          <Button2
            label="Explore our products"
            icon={faArrowRight}
            color="bg-secondary_1"
            extraStyle="h-12 max-[350px] mb-2"
          />
          <Button1 label="Log in / Sign up" path="/login"extraStyle="h-12" />
        </div>
        <div className="flex tablet:justify-start tablet:items-start sm:justify-center sm:items-center flex-wrap w-full  gap-20 max-sm:gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="leading-7 font-montserrat">{stat.label}</p>
              <p className="text-2xl max-sm:text-xl font-palanquin font-bold">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center overflow-hidden tablet:pt-24">
        <img
          src={HeroImage}
          alt="Pro Balance"
          className="object-contain max-sm:h-[250px] h-[350px] md:h-[450px] transform -rotate-25"
        />
      </div>
    </section>
  );
};

export default Hero;
