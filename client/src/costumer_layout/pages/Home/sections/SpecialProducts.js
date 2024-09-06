import React, { useState, useEffect } from "react";
import {  products, productType } from "../../../../constants";
import ProductCard2 from "../../../components/cards/ProductCard2";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from "react-redux";



const SpecialProducts = ({selectedType}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const selectedCategory = productType.find(type => type.name === selectedType);
  const subcategories = selectedCategory?.subcategories?.map(sub => sub.name) || [];

  // Filter products by category or subcategory
  const filteredProducts = products.filter(
    product => product.category === selectedType || subcategories.includes(product.category) || selectedType === "All"
  );

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
       {filteredProducts.map((product, index) => (
           <div key={index} className="w-full h-full p-2">
             <ProductCard2
               index={index}
               img={product.img}
               productName={product.name}
               category={product.category}
               oldPrice={product.oldPrice}
               price={product.price}
             />
           </div>
       ))}
     </Carousel>
      ) : (
        <div className="grid grid-cols-2 max-sm:grid-cols-1 tablet:grid-cols-3 2xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="w-full h-full">
              <ProductCard2
                index={index}
                img={product.img}
                productName={product.name}
                category={product.category}
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
