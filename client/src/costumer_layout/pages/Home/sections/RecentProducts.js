import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard1 from "../../../components/cards/ProductCard1";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchProductsByCategory } from "../../../../store/features/products/productsSlice";
import { Circles } from "react-loader-spinner";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const RecentProducts = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const productError = useSelector((state) => state.products.error);

  
  return (
    <section className="w-full flex flex-col justify-center items-center gap-10">
      <div className="relative flex flex-col justify-center gap-3 items-center w-full">
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" className="flex justify-center items-center">
          <circle cx="15" cy="15" r="7" fill="#8FD3D4" className="flex justify-center items-center" />
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
      <div className="padding-x w-full block justify-center items-center">
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
                <SplideSlide key={index}>
                  <div className="w-full h-full">
                    <ProductCard1
                      key={product._id}
                      img={product.images || []} 
                      productName={product.name || 'Unknown Product'}
                      category={product.category.name || 'Unknown Category'}
                      oldPrice={product.oldPrice}
                      discount={product.discount}
                      price={product.price || 'N/A'}
                    />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
            ) : (
              <div className="grid grid-cols-2 max-sm:grid-cols-1 tablet:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 justify-center items-center">
                {products.map((product, index) => (
                  <div key={product._id} className="w-full h-full">
                    <ProductCard1
                        key={product._id}
                        img={product.images || []} 
                        productName={product.name || 'Unknown Product'}
                        category={product.category.name || 'Unknown Category'}
                        oldPrice={product.oldPrice}
                        discount={product.discount}
                        price={product.price || 'N/A'}
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

export default RecentProducts;
