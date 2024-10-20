import React, { useState, useEffect } from "react";
import {  products, productType } from "../../../../constants";
import ProductCard2 from "../../../components/cards/ProductCard2";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from "react-redux";



const SpecialProducts = ({selectedType}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const productError = useSelector((state) => state.products.error);

  if (productStatus === 'loading') {
    return <div>Loading products...</div>;
  }

  if (productStatus === 'failed') {
    return <div>Error: {productError}</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products available for this category</div>;
  }

  return (
    <section className="flex flex-col justify-center items-center padding-x">
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
      {isSmallScreen ? (
      <Carousel  showThumbs={false} 
      showStatus={false} 
      infiniteLoop 
      autoPlay 
      interval={5000} >
       {products.map((product, index) => (
           <div key={index} className="w-full h-full p-2">
             <ProductCard2
               index={index}
               img={product.images || []}
               productName={product.name}
               category={product.category.name}
               oldPrice={product.oldPrice}
               price={product.price}
             />
           </div>
       ))}
     </Carousel>
      ) : (
        <div className="grid grid-cols-2 max-sm:grid-cols-1 tablet:grid-cols-3 2xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="w-full h-full">
              <ProductCard2
                index={index}
                img={product.images || []}
                productName={product.name}
                category={product.category.name}
                oldPrice={product.oldPrice}
                price={product.price}
              />
            </div>
          ))}
        </div>
      )}
    </div>
    </section>
  );
};

export default SpecialProducts;
