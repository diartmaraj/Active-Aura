import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import SpecialOffersCard from '../../../components/cards/SpecialOffersCard'
import FiguActiveSmoothCocoa from "../../../assets/images/FiguActiveSmoothCocoa.png"
import Logo from "../../../assets/images/logo.png"
import { specialOffers } from '../../../constants'

const SpecialOffers = () => {
  return (
    <section className='pt-40'>
        <Carousel showThumbs={false} 
        showStatus={false} 
        infiniteLoop >
            {specialOffers.map((card,index) => (
                <div className='h-full w-full'>
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