import React from 'react';
import ProductsTable from './components/ProductsTable';
import { useNavigate } from 'react-router-dom';


const Products = () => {
    const navigate = useNavigate();
    const handleAddProductClick = () => {
        navigate('/admin/products/add-products');
    }
  return (
    <div className='padding-x py-4'>
        <div className='flex flex-col items-start justify-center gap-4 pb-4' >
            <p className='text-sm text-gray-400'>
                Dashboard / Products
            </p>
            <h1 className='text-2xl font-bold '>
                Products
            </h1>
        </div>
        <div className='bg-white rounded-xl p-4'> 
            <div className="flex justify-between items-center mb-4 ">
          {/* Search bar */}
            <div className="flex items-center w-full max-w-xs">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search product"
            />
          </div>

          {/* Add Product button */}
          <div className="flex items-center space-x-2">
            <button onClick={handleAddProductClick}  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Add Product
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
              Import CSV
            </button>
          </div>
          </div>
            <ProductsTable />
        </div>
    </div>
  )
}

export default Products