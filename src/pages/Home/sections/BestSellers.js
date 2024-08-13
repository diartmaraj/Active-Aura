import React from "react";
import Button2 from "../../../components/Button2";
import MindMaster from "../../../assets/images/MindMaster.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CurvedArrow from "../../../assets/images/CurvedArrow.png";

const BestSellers = () => {
  return (
    <section className="padding-x flex flex-col md:flex-row xl:flex-row justify-around items-center md:gap-24 xl:gap-32 gap-0 w-full max-container ">
      <div className="flex flex-row justify-center items-center ">
        <div className="flex flex-col gap-6 justify-center items-start w-full">
          <h1 className="text-4xl font-bold text-nowrap">
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
          className="absolute h-36 w-36 transform translate-x-52 -translate-y-20   z-0 "
        />
      </div>
      <div className="">
        <img src={MindMaster} alt="MindMaster" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default BestSellers;
