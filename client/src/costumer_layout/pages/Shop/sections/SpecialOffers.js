import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpecialOffersCard from '../../../components/cards/SpecialOffersCard';
import { fetchProductsSpecialOffers } from '../../../../store/features/products/productsSlice';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const SpecialOffers = () => {
  const dispatch = useDispatch();
  const specialProducts = useSelector((state) => state.products.specialOffers);
  const [screenSizeTablet, setScreenSizeTablet] = useState(window.innerWidth >= 904);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenSizeTablet(window.innerWidth >= 904);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    dispatch(fetchProductsSpecialOffers());
  }, [dispatch]);


  return (
    <section className='tablet:costum-carousel pt-64'>
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 5000,
          perPage: 1,
          pagination: false,
          arrows: screenSizeTablet, 
        }}
        className='h-96'
      >
        {specialProducts.map((card, index) => (
          <SplideSlide key={index}>
            <SpecialOffersCard
              img={card.images || []}
              title={card.name}
              discount={card.discount}
              name={card.name}
              phone={card.phone || "+38349473342"}
              bgGradient={"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"} // Example gradient
              btnTextColor={"text-black"} // Example text color
            />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default SpecialOffers;
