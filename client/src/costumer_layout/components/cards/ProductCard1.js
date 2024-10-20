import React from 'react';
import AddToCartButton from '../buttons/AddToCartButton';

const ProductCard1 = ({ img, productName, category, price }) => {
  const baseURL = 'http://localhost:5000'; // Change this to your server's base URL if needed
  
  // Handle the case where no image is available
  const imageUrl = img.length > 0 
    ? `${baseURL}/${img[0]}` // Use the first image in the array
    : `${baseURL}/default-image.jpg`; // Fallback to a default image if no image is provided

  return (
    <div className="flex flex-col items-center text-center justify-between w-full h-full rounded-lg shadow-xl">
      <img
        src={imageUrl}
        alt={productName}
        className="max-sm:h-36 h-48 object-contain mb-4 self-center"
      />
      <div className="flex flex-col justify-between items-center flex-1 px-4">
        <div>
          <p className="text-sm text-gray-500">{category}</p>
          <h1 className="font-semibold text-lg my-2">{productName}</h1>
          <h1 className="text-lg text-gray-700">{price}€</h1>
        </div>
        <AddToCartButton label="Add to cart" />
      </div>
    </div>
  );
};

export default ProductCard1;
