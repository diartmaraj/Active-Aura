import React,{useState, useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel'
import SpecialOffersCard from '../../../components/cards/SpecialOffersCard'

import { specialOffers } from '../../../constants'

const SpecialOffers = () => {
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
    <section className='tablet:costum-carousel pt-64'>
        <Carousel showThumbs={false} 
        showStatus={false} 
        infiniteLoop 
        autoPlay
        interval={5000}
        className='h-96'>
            {specialOffers.map((card,index) => (
                <div key={index} className='h-full w-full'>
                    <SpecialOffersCard 
                    imgSrc={card.img}
                    title="Big Sale"
                    discount={card.discount}
                    name={card.name}
                    phone="+38349473342 "
                    bgGradient={card.bgGradient}
                    btnTextColor={card.btnTextColor}
                /></div>
            ))}
        </Carousel>
    </section>
  )
}

export default SpecialOffers