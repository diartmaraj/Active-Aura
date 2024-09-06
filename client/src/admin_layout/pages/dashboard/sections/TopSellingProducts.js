import React from 'react';


const TopSellingProducts = ({products}) => {

  const baseURL = "http://localhost:3001";
  return (
    <section className="h-64 p-4">
      <div className="mb-4 text-xl font-semibold text-gray-700">Top Selling Products</div>
      <div className="h-full overflow-y-auto scrollbar-hide">
        <ul className="space-y-2">
          {products.map((product, index) => (
            <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className='flex items-center'>
                <div className='mr-2'>
                  <img src={`${baseURL}${product.img}`} className='object-contain h-10'></img>
                </div>
                <div>{product.name}</div>
                </div>
              <div>${product.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TopSellingProducts