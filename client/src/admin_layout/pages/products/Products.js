import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import CustomInputText from '../../components/costum/CostumInput';
import Button1 from '../../components/buttons/Button1';
import AddProducts from './AddProducts'; // Import the AddProducts component
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/features/products/productsSlice';

Modal.setAppElement('#root'); // Set the root element for accessibility

const Products = () => {
  
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    const productStatus = useSelector((state) => state.products.status);
    const filteredProducts = useSelector((state) => state.products.items);
    const dispatch = useDispatch();

    useEffect(() => {
        if (productStatus === 'idle') {
          dispatch(fetchProducts()).catch(error => console.error('Error fetching products:', error));
        }
      }, [dispatch, productStatus]);
    

    const handleAddProduct = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEditProduct = (id) => {
        // Logic to edit a product
    };

    const handleDeleteProduct = (id) => {
        
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-4">Manage Products</h2>

            <div className="flex justify-between mb-4">
                <CustomInputText
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search products..."
                    className="w-1/2"
                />
                <Button1
                    label="Add Product"
                    onClick={handleAddProduct}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-1">Category: {product.category}</p>
                        <p className="text-gray-600 mb-4">Price: {product.price}</p>
                        <div className="flex justify-end gap-2">
                            <Button1
                                label="Edit"
                                onClick={() => handleEditProduct(product.id)}
                                extraStyle="h-12"
                            />
                            <Button1
                                label="Delete"
                                onClick={() => handleDeleteProduct(product.id)}
                                extraStyle="h-12"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Adding Product */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Add Product"
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Add Product</h2>
                    <AddProducts />
                    <button onClick={closeModal} className="mt-4 text-red-500">Close</button>
                </div>
            </Modal>
        </div>
    );
};

export default Products;
