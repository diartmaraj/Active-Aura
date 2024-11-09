import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, editProduct, deleteProduct } from '../../../../store/features/products/productsSlice';
import ProductRow from './ProductRow';
import { useNavigate } from 'react-router-dom';

const ProductsTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleEdit = (product) => {
    navigate('')
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div className='  p-4 '>
      {productStatus === 'loading' && <div>Loading...</div>}
      {productStatus === 'failed' && <div>{error}</div>}
      {productStatus === 'succeeded' && (
        <table className="min-w-full bg-white rounded-xl overflow-hidden">
          <thead className='bg-gray-200 '>
            <tr className=''>
              <th className="w-1/4 py-2 ">Product</th>
              <th className="w-1/4 py-2">Category</th>
              <th className="w-1/4 py-2">Stock</th>
              <th className="w-1/4 py-2">Price</th>
              <th className="py-2 pr-4">Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {products.map((product) => (
              <ProductRow 
                key={product._id} 
                product={product} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsTable;
