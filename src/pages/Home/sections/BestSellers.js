import React from "react";
import Button2 from "../../../components/Button2";
import MindMaster from "../../../assets/images/MindMaster.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CurvedArrow from "../../../assets/images/CurvedArrow.png";

const BestSellers = () => {
  return (
    <section className="flex flex-col  tablet:flex-row justify-around items-center w-full gap-10 max-tablet:gap-0">
      <div className="flex flex-1 xl:flex-none relative justify-center items-center ">
        <div className="flex flex-col gap-6 justify-center items-start w-full">
          <h1 className="text-4xl max-sm:text-[28px] max-sm:leading-[34px] font-bold text-nowrap">
            <span>Check out our</span> <br />
            <span>best sellers</span>
          </h1>
          <Button2
            label="Explore our products"
            icon={faArrowRight}
            color="bg-secondary_1"
          />
        </div>

        <img
          src={CurvedArrow}
          alt="Curved Arrow"
          className="absolute h-36 w-24 max-sm:h-20 max-sm:w-16 tablet:w-36 transform max-sm:translate-x-[120px] translate-x-[200px] tablet:translate-x-[175px] lg:translate-x-[150px] xl:translate-x-[225px] 2xl:translate-x-[225px] max-sm:-translate-y-16 -translate-y-20 object-cover "
        />
      </div>
      <div className="flex flex-1 xl:flex-none">
        <img src={MindMaster} alt="MindMaster" className="w-[350px] max-sm:w-[250px] h-auto " />
      </div>
    </section>
  );
};

export default BestSellers;
