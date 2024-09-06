import React from "react";
import ProductCard1 from "../../../components/cards/ProductCard1";
import { recentProducts, productType } from "../../../../constants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../../store/features/products/productsSlice";


const RecentProducts = ({selectedType}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);
  const products = useSelector((state) => state.products.items);


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
    product => selectedType === "All" || product.category === selectedType || subcategories.includes(product.category)
  );



  return (
    <section className="w-full flex flex-col justify-center items-center gap-10  ">
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
        <div className="flex flex-col justify-center items-center gap-1 max-sm:gap-2 padding-x">
          <h1 className="font-montserrat text-3xl text-center max-sm:text-xl font-bold text-primary">
            Explore the recent products
          </h1>
          <p className="text-xs text-center font-semibold text-primary">
            Discover Our Latest Arrivals for Optimal Health and Wellness
          </p>
        </div>
      </div>
      <div className="padding-x w-full  block justify-center items-center ">
        {isSmallScreen ? (
        <Carousel  showThumbs={false} 
        showStatus={false} 
        infiniteLoop 
        autoPlay 
        interval={5000} >
          {filteredProducts.map((product, index) => (
            
              <div className="w-full h-full ">
                <ProductCard1
                  index={index}
                  img={product.img}
                  productName={product.name}
                  category={product.category}
                  price={product.price}
                />
              </div>
           
          ))}
        </Carousel>
        ) : (
          <div className="grid grid-cols-2 max-sm:grid-cols-1 tablet:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 justify-center items-center">
            {filteredProducts.map((product, index) => (
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
        )}
      </div>
    </section>
  );
};

export default RecentProducts;
