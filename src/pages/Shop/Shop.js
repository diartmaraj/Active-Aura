import React from 'react';
import Header from '../../components/Header';
import SpecialOffers from './sections/SpecialOffers';

const Shop = () => {
  return (
    <main className='relative'>
    <section className=''>
        <Header/>
        <section>
            <SpecialOffers/>
        </section>
    </section>
    </main>
  )
}

export default Shop