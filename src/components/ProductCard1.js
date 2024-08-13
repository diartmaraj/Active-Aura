import React from "react";
import AddToCartButton from "./AddToCartButton";

const ProductCard1 = ({ img, productName, category, price }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 w-full h-full rounded-lg shadow-xl">
      <img
        src={img}
        alt={productName}
        className=" h-48 object-cover mb-4 self-center  "
      />
      <div className="flex flex-col justify-between items-center flex-1  ">
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
