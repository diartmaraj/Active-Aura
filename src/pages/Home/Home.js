import React from "react";
import Header from "../../components/HomeHeader";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <main className="relative">
      <section className>
        <Header />
      </section>
      <section className>
        <Hero />
      </section>
    </main>
  );
};

export default Home;
