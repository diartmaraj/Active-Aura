import React from "react";
import ProductCard1 from "../../../components/ProductCard1";
import { recentProducts } from "../../../constants";

const RecentProducts = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-10 max-container padding-x ">
      <div className="relative flex flex-col justify-center gap-3 items-center w-full">
        <svg
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
          className="flex justify-center items-center"
        >
          <circle
            cx="15"
            cy="15"
            r="7"
            fill="#8FD3D4"
            className="flex justify-center items-center"
          />
        </svg>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="font-montserrat text-3xl font-bold text-primary">
            Explore the recent products
          </h1>
          <p className="text-xs font-semibold text-primary">
            Discover Our Latest Arrivals for Optimal Health and Wellness
          </p>
        </div>
      </div>
      <div className="padding-x grid grid-cols-2 gap-6 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recentProducts.map((product, index) => (
          <div key={index} className="w-full h-full">
            <ProductCard1
              index={index}
              img={product.img}
              productName={product.name}
              category={product.category}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProducts;
