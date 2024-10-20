import React from 'react';


const ProductRow = ({ product, onEdit, onDelete }) => {
    const baseURL = "http://localhost:5000/"
  return (
    <tr className='h-12 w-full'>
      <td className=" py-2 flex items-center ">
        <img src={`${baseURL}${product.images[0]}`} alt={product.name} className="w-10 h-10 rounded mr-2" />
        {product.name}
      </td>
      <td className=" py-2">{product.categoryName}</td>
      <td className="  py-2">{product.stock}</td>
      <td className="  py-2">${product.price}</td>
      <td className=" py-2 flex items-center justify-center">
        <button 
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => onEdit(product)}
        >
          Edit
        </button>
        <button 
          className="bg-red-500 text-white px-2 py-1 rounded ml-2"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
