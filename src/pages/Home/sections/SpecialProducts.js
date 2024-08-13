import React, { useState } from "react";
import { categories, products } from "../../../constants";
import ProductCard2 from "../../../components/ProductCard2";

const SpecialProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <section className="flex flex-col justify-center items-center max-container padding-x">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-primary">This Week's </span>
          <span className="text-secondary_2">Special Products</span>
        </h1>
        <p className="text-primary text-center">
          Check out this week's special products that you can get with +20% OFF!
        </p>
      </div>
      <div className="flex flex-row justify-between items-center gap-12 mt-8 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`text-center font-bold text-lg pb-1 cursor-pointer ${
              selectedCategory === category.name
                ? "border-b-4 border-secondary_1 "
                : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <a className="font-montserrat">{category.name}</a>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {filteredProducts.map((product, index) => (
          <div key={index} className="w-full h-full">
            <ProductCard2
              index={index}
              img={product.image}
              productName={product.name}
              category={product.kategoria}
              oldPrice={product.oldPrice}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialProducts;
