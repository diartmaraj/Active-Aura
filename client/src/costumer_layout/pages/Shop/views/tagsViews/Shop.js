import React from 'react'
import MostPopular from '../../sections/MostPopular'
import Recommended from '../../sections/Recommended'
import BrandSpotlight from '../../sections/BrandSpotlight'

const Shop = ({isFiltersOpen, toggleFilters, filteredProducts}) => {
  return (
    <section className='w-full'>
        <section className='w-full '>
              <MostPopular isFiltersOpen={isFiltersOpen} toggleFilters={toggleFilters} filteredProducts={filteredProducts} />
            </section>
            <section className='w-full'>
              <Recommended  isFiltersOpen={isFiltersOpen} toggleFilters={toggleFilters} filteredProducts={filteredProducts} />
            </section>
            <section className='w-full'>
              <BrandSpotlight isFiltersOpen={isFiltersOpen} toggleFilters={toggleFilters} filteredProducts={filteredProducts} />
            </section>
    </section>
  )
}

export default Shop