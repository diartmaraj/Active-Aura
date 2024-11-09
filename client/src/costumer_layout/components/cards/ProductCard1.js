import React from 'react';
import AddToCartButton from '../buttons/AddToCartButton';

const ProductCard1 = ({ img, productName, category, price ,oldPrice, discount}) => {
  const baseURL = 'http://localhost:5000'; 
  
 
  const imageUrl = img.length > 0 
    ? `${baseURL}/${img[0]}` 
    : `${baseURL}/default-image.jpg`; 
  return (
    <div className="flex flex-col items-center text-center p-4 w-full h-full overflow-hidden rounded-lg shadow-xl">
      <img
        src={imageUrl}
        alt={productName}
        className="max-sm:h-36 h-48 object-contain mb-4 self-center"
      />
      <div className="flex flex-col justify-between items-center flex-1 w-full">
        <div className='text-left w-full'>
          <p className="text-sm text-gray-500 text-start">{category}</p>
          <h1 className="font-semibold text-lg my-2 line-clamp-2">{productName}</h1>
          <div className="flex flex-row gap-3 justify-start items-center">
            {discount && <h1 className="text-sm line-through text-gray-700">{oldPrice}€</h1>}
            <h1 className="text-lg">{price}€</h1>
          </div>
        </div>
        <div className="flex justify-start w-full mt-2">
          <AddToCartButton label="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;
