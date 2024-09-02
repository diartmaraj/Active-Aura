import React,{useState} from "react";
import Header from "../../components/HomeHeader";

import {
  Hero,
  RecentProducts,
  SpecialProducts,
  BestSellers,
  Benefits,
  Newsletter,
} from "./sections";
import Footer from "../../components/Footer";
import CategorySelector from "./sections/CategorySelector";
import { productType } from "../../constants";

const Home = () => {
  const [selectedType, setSelectedType] = useState(productType[0].name);


  return (
    <main className="relative">
      <Header />
      <section className="xl:padding-l 2xl:pl-24  max-md:padding-b">
        <Hero />
      </section>
      <section className="flex justify-center items-center padding-b">
        <svg
          viewBox="0 0 1700 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[5000px] h-[200px] xl:h-[260px] 2xl:h-[300px]"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#50C878", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FF6F61", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <g transform="rotate(-5 850 75)">
            <rect
              x="-200"
              y="40"
              fill="url(#gradient)"
              className="w-[3000px] h-[150px] tablet:h-[120px] 2xl:h-[90        px] "
            />
            <text
              fontFamily="Arial"
              fontSize="40"
              fill="white"
              textAnchor="middle"
              transform="translate(0, 115) tablet:translate(0, 100) 2xl:translate(0, 70)"
              className="text-position"
            >
              <tspan>ActiveAura</tspan>
              <tspan dx="100">ActiveAura</tspan>
              <tspan dx="100">ActiveAura</tspan>
              <tspan dx="100">ActiveAura</tspan>
              <tspan dx="100">ActiveAura</tspan>
              <tspan dx="100">ActiveAura</tspan>
              <tspan dx="100">ActiveAura</tspan>
              <tspan dx="100">ActiveAura</tspan>
            </text>
          </g>
        </svg>
      </section>
      <section className="padding-b ">
        <CategorySelector selectedType={selectedType} setSelectedType={setSelectedType}/>
        <RecentProducts selectedType={selectedType}/>
      </section>
      <section className=" max-md:padding-t padding-l">
        <BestSellers />
      </section>
      <section className="padding-b">
        <SpecialProducts selectedType={selectedType}/>
      </section>
      <section className="padding-y">
        <Benefits />
      </section>
      <section className="padding-y  padding-b">
        <Newsletter />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
