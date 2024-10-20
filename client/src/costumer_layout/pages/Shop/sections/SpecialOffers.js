import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import SpecialOffersCard from '../../../components/cards/SpecialOffersCard';
import { fetchProducts } from '../../../../store/features/products/productsSlice';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SpecialOffers = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
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
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products with non-zero discount and sort by discount value
  const specialOffers = products
    .filter(product => parseFloat(product.discount) > 0)
    .sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount))
    .slice(0, 3);  // Take the top 3 products with the highest discounts

  return (
    <section className='tablet:costum-carousel pt-64'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        className='h-96'
      >
        {specialOffers.map((card, index) => (
          <div key={index} className='h-full w-full'>
            <SpecialOffersCard
              img={card.images || []}
              title={card.name}
              discount={card.discount}
              name={card.name}
              phone={card.phone || "+38349473342"}
              bgGradient={"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"} // Example gradient
              btnTextColor={"text-black"} // Example text color
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default SpecialOffers;
