import React from 'react'
import { brands } from '../../../constants'

const Brands = () => {
  return (
    <section className=''>
      <div className='flex flex-row justify-center items-center gap-10 '>
        {brands.map((brand,index) => (
          <div key={index} className='w-full h-full flex justify-center items-center'>
            <img src={brand.logo} alt={brand.name} className='h-20 w-20 xl:h-24 xl:w-24 object-contain'/>
          </div>
        ))}
      </div>
        
    </section>
  )
}

export default Brands