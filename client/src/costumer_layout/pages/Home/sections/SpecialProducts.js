import React, { useState, useEffect } from "react";
import {  products, productType } from "../../../../constants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from "react-redux";
import ProductCard1 from "../../../components/cards/ProductCard1";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Circles } from "react-loader-spinner";



const SpecialProducts = ({selectedType}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const productError = useSelector((state) => state.products.error);


  return (
    <section className="w-full flex flex-col justify-center items-center padding-x gap-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          <span className="text-primary">This Week's </span>
          <span className="text-secondary_2">Special Products</span>
        </h1>
        <p className="text-primary text-center">
          Check out this week's special products that you can get with +20% OFF!
        </p>
      </div>
      
      <div className="padding-x w-full block justify-center items-center ">
      {productStatus === 'failed' ? (
           <span className="flex justify-center items-center"> No Product for this category </span>
        ) : (
          productStatus === 'loading' ? (
            <div className="flex justify-center items-center w-full">
        <Circles 
          height="80" 
          width="80" 
          color="#4fa94d" 
          ariaLabel="circles-loading" 
          wrapperStyle={{}} 
          wrapperClass="" 
          visible={true} 
        />
      </div>
          ) : (
      isSmallScreen ? (
      <Splide
      options={{
        type: 'loop',
        autoplay: true,
        interval: 5000,
        pagination: false, // Equivalent to showStatus={false}
        arrows: true, // Show arrows
        perPage: 1, // Adjust as needed
      }}
      className="w-full h-full"
    >
      {products.map((product, index) => (
        product.discount && (
          <SplideSlide key={index}>
            <div className="w-full h-full p-2">
              <ProductCard1
                index={index}
                img={product.images || []}
                productName={product.name || 'Unknown Product'}
                category={product.category.name || 'Unknown Category'}
                oldPrice={product.oldPrice}
                discount={product.discount}
                price={product.price || 'N/A'}
              />
            </div>
          </SplideSlide>
        )
      ))}
    </Splide>
      ) : (
        <div className="grid grid-cols-2 max-sm:grid-cols-1 tablet:grid-cols-3 2xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            product.discount && 
            <div key={index} className="w-full h-full">
              <ProductCard1
                index={index}
                img={product.images || []}
                productName={product.name}
                category={product.category.name}
                oldPrice={product.oldPrice}
                discount={product.discount}
                price={product.price}
              />
            </div>
          ))}
        </div>
      )
      )
    )}
    </div>
    </section>
  );
};

export default SpecialProducts;
