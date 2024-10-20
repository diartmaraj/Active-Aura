import React from 'react'
import AddToCartButton from '../buttons/AddToCartButton'

const ListCard = ({ img, productName, category, price }) => {
  const baseURL = 'http://localhost:5000'; // Change this to your server's base URL if needed
  
  // Handle the case where no image is available
  const imageUrl = img.length > 0 
    ? `${baseURL}/${img[0]}` // Use the first image in the array
    : `${baseURL}/default-image.jpg`;
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg w-full   p-4 mb-4">
    <img
      src={imageUrl}
      alt={productName}
      className="w-full md:w-40 h-40 object-contain rounded-md mb-4 md:mb-0 md:mr-4"
    />
    <div className="flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-lg font-semibold mb-2">{productName}</h3>
        <p className="text-gray-700 text-sm mb-4">{category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-primary font-bold text-lg">${price}</p>
        <div className="">
        <AddToCartButton label="Add to cart"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ListCard