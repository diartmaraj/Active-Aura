import React, { useState, useEffect } from 'react';

const SpecialOffersCard = ({ img, title, subtitle, discount, name, phone, bgGradient, btnTextColor }) => {
  const baseURL = 'http://localhost:5000'; // Adjust to your server's base URL if needed
  
  // Handle the case where no image is available
  const imageUrl = img.length > 0 
    ? `${baseURL}/${img[0]}` // Use the first image in the array
    : `${baseURL}/default-image.jpg`; // Fallback to a default image if no image is provided

  return (
   
    <a href={'/shop'} target="_blank" rel="noopener noreferrer">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt="Special Offer"
          className="w-full h-full object-contain"
        />
      </div>
    </a>
  );
};

export default SpecialOffersCard;
