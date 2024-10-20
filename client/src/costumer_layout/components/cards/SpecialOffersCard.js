import React, { useState, useEffect } from 'react';

const SpecialOffersCard = ({ img, title, subtitle, discount, name, phone, bgGradient, btnTextColor }) => {
  const baseURL = 'http://localhost:5000'; // Change this to your server's base URL if needed
  
  // Handle the case where no image is available
  const imageUrl = img.length > 0 
    ? `${baseURL}/${img[0]}` // Use the first image in the array
    : `${baseURL}/default-image.jpg`; // Fallback to a default image if no image is provided

  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrSmaller(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative ${bgGradient} text-white rounded-lg shadow-lg h-64 tablet:h-96 p-4 overflow-hidden flex items-center justify-center`}>
      <div className="absolute max-tablet:top-4 max-tablet:right-4 top-10 right-10">
        <p
          className={`text-lg ${isTabletOrSmaller ? 'text-sm text-center' : 'text-left'}`}
          style={{ whiteSpace: isTabletOrSmaller ? 'pre-wrap' : 'normal' }}
        >
          {name.split(' ').join('\n')}
        </p>
      </div>
      <div className="absolute max-tablet:top-8 max-tablet:left-4 top-12 left-8">
        <p className="font-bold text-lg">New Arrivals</p>
        <h1 className="font-extrabold text-2xl">{title}</h1>
        <button className={`mt-2 bg-white ${btnTextColor} font-bold py-1 px-3 rounded-full shadow-md`}>
          Shop Now
        </button>
      </div>
      <div className="absolute max-tablet:bottom-4 max-tablet:left-4 bottom-10 left-10">
        <p className="font-semibold">Call Now</p>
        <p>{phone}</p>
      </div>
      <div className="absolute max-tablet:bottom-4 max-tablet:right-4 bottom-10 right-10">
        <p className="font-semibold">Up to</p>
        <p className="text-2xl font-bold">{discount} OFF</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Product"
          className="max-tablet:w-48 max-tablet:h-48 w-56 h-56 object-contain transform rotate-45"
        />
      </div>
    </div>
  );
};

export default SpecialOffersCard;
