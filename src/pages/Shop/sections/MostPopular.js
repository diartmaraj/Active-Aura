import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { mostPopularProducts } from '../../../constants';
import ProductCard1 from "../../../components/cards/ProductCard1";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';

const MostPopular = () => {
    const [screenSizeTablet, setscreenSizeTablet] = useState(window.innerWidth >= 904);

    useEffect(() => {
    const handleResize = () => {
      setscreenSizeTablet(window.innerWidth >= 904);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className='flex flex-col justify-center items-center gap-10'>
        <div className='flex justify-between items-center w-full'>
            <div className='flex items-center gap-10'>
            <p className='text-base font-semibold'>Most popular products</p> 
            <p className=' text-base flex justify-center items-center gap-2 text-primary max-sm:hidden'>Filter <IoFilter /></p>
            </div>
            <p className='text-base flex justify-center items-center gap-2 text-secondary_1'>View all <MdKeyboardArrowRight /></p>
        </div>
        <div className='w-full h-[350px] costum-carousel '>
            <Carousel showThumbs={false} 
            showStatus={false} 
            centerMode={screenSizeTablet}
            centerSlidePercentage={screenSizeTablet ? 33.33 : 100}
            className={`h-full `}
            >
            {mostPopularProducts.map((product,index) => (
                <div className={`w-full h-full ${screenSizeTablet ? "px-5" : ""}`}>
                    <ProductCard1 
                    img={product.img}
                    productName={product.name}
                    category={product.category}
                    price={product.price}
                    imgHeight="h-36"
                    />
                </div>
            ))}
            </Carousel>
        </div>
    </section>
  )
}

export default MostPopular