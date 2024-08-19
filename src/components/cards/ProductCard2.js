import React from "react";
import AddToCartButton from "../AddToCartButton";

const ProductCard2 = ({ img, productName, oldPrice, price }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 w-full h-full sm:rounded-lg sm:shadow-xl">
      <img
        src={img}
        alt={productName}
        className=" h-48 object-contain mb-4 self-center  "
      />
      <div className="flex flex-col justify-between items-center flex-1  w-full">
        <div className="text-left w-full">
          <p className="text-sm text-gray-500 text-start ">Product Name</p>
          <h1 className="font-semibold text-lg my-2 ">{productName}</h1>
          <div className="flex flex-row gap-3 justify-start items-center">
            <h1 className="text-sm line-through text-gray-700">{oldPrice}€</h1>
            <h1 className="text-lg ">{price}€</h1>
          </div>
        </div>
        <div className="flex justify-start w-full mt-2">
          <AddToCartButton label="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
