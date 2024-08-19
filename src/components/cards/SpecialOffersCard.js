import React from 'react'


const SpecialOffersCard = ({imgSrc, title, subtitle, discount, name, phone, bgGradient, btnTextColor}) => {
  return (
    <div className={`relative ${bgGradient} text-white rounded-lg shadow-lg h-64 p-4 overflow-hidden flex items-center justify-center`}>
      <div className="absolute top-4 right-4">
        <p className='text-sm'  style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>{name.split(' ').join('\n')}</p>
      </div>
      <div className="absolute top-8 left-4">
        <p className="font-bold text-lg">New Arrivals</p>
        <h1 className="font-extrabold text-2xl">{title}</h1>
        <button className={`mt-2 bg-white ${btnTextColor} font-bold py-1 px-3 rounded-full shadow-md`}>
          Shop Now
        </button>
      </div>
      <div className="absolute bottom-4 left-4">
        <p className="font-semibold">Call Now</p>
        <p>{phone}</p>
      </div>
      <div className="absolute bottom-4 right-4">
        <p className="font-semibold">Up to</p>
        <p className="text-2xl font-bold">{discount} OFF</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={imgSrc}
          alt="Product"
          className="w-48 h-48 object-contain transform rotate-45"
        />
      </div>
    </div>
  )
}

export default SpecialOffersCard