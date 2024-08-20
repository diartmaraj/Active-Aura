import React from 'react'
import { productType, recentProducts } from '../../../constants'
import { useState } from 'react';

const CategorySelector = ({selectedType, setSelectedType}) => {
   
    
  return (
    <div className='flex justify-center items-center w-full pb-6'>
        <div className='flex justify-center items-center gap-10'>
            {productType.map((type, index) => (
                <div key={index} className={`text-center font-bold text-lg pb-1 cursor-pointer ${
                    selectedType === type.name
                      ? "border-b-4 border-secondary_1 "
                      : ""
                  }`}
                  onClick={() => setSelectedType(type.name)}>
                    <h1 >{type.name}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CategorySelector