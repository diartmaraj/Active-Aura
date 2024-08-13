import React from "react";
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

const Home = () => {
  return (
    <main className="relative">
      <Header />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="flex justify-center items-center">
        <svg
          width="1800"
          height="200"
          viewBox="0 0 1700 200"
          xmlns="http://www.w3.org/2000/svg"
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
              width="2000"
              height="75"
              x="-100"
              y="75"
              fill="url(#gradient)"
            />
            <text
              x="850"
              y="125"
              fontFamily="Arial"
              fontSize="30"
              fill="white"
              textAnchor="middle"
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
      <section className="padding-b wide:padding-r">
        <RecentProducts />
      </section>
      <section className="max-md:padding-t  padding-l">
        <BestSellers />
      </section>
      <section className="padding-b">
        <SpecialProducts />
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
