import axios from 'axios';
import React, { useState } from 'react';
import Button1 from '../../components/buttons/Button1';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import CustomDropdown from '../../components/costum/CostumDropdown';
import CustomInputText from '../../components/costum/CostumInput';
import {
    brands,
    productType,
    ratings,
    discounts,
    colors,
    sizes,
    materials,
    availability,
  } from '../../../constants'

  const AddProducts = () => {
    const [product, setProduct] = useState({
        name: '',
        category: '',
        subcategory: '',
        img: '',
        oldPrice: '',
        price: '',
        rating: null,
        brand: '',
        color: '',
        size: '',
        material: '',
        gender: '',
        available: '',
        discount: ''
    });

    const handleInputChange = (e, field) => {
        setProduct({
            ...product,
            [field]: e.target.value
        });
    };

    const handleDropdownChange = (e, field) => {
        setProduct({
            ...product,
            [field]: e.value
        });
    };

    const handleAdd = () => {
        axios.post('http://localhost:3001/api/products/add', { product })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                    <label htmlFor="name">Product Name</label>
                    <CustomInputText id="name" value={product.name} onChange={(e) => handleInputChange(e, 'name')} placeholder="Enter product name" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="category">Category</label>
                    <CustomDropdown id="category" value={product.category} options={productType} onChange={(e) => handleDropdownChange(e, 'category')} optionLabel="name" placeholder="Select a Category" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="subcategory">Subcategory</label>
                    <CustomDropdown id="subcategory" value={product.subcategory} options={productType.find(pt => pt.name === product.category)?.subcategories || []} onChange={(e) => handleDropdownChange(e, 'subcategory')} optionLabel="name" placeholder="Select a Subcategory" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="img">Image URL</label>
                    <CustomInputText id="img" value={product.img} onChange={(e) => handleInputChange(e, 'img')} placeholder="Enter image URL" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="oldPrice">Old Price</label>
                    <CustomInputText id="oldPrice" value={product.oldPrice} onChange={(e) => handleInputChange(e, 'oldPrice')} placeholder="Enter old price" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="price">Price</label>
                    <CustomInputText id="price" value={product.price} onChange={(e) => handleInputChange(e, 'price')} placeholder="Enter price" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="rating">Rating</label>
                    <CustomDropdown id="rating" value={product.rating} options={ratings} onChange={(e) => handleDropdownChange(e, 'rating')} optionLabel="value" placeholder="Select a Rating" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="brand">Brand</label>
                    <CustomDropdown id="brand" value={product.brand} options={brands} onChange={(e) => handleDropdownChange(e, 'brand')} optionLabel="name" placeholder="Select a Brand" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="color">Color</label>
                    <CustomDropdown id="color" value={product.color} options={colors} onChange={(e) => handleDropdownChange(e, 'color')} optionLabel="name" placeholder="Select a Color" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="size">Size</label>
                    <CustomDropdown id="size" value={product.size} options={sizes} onChange={(e) => handleDropdownChange(e, 'size')} optionLabel="name" placeholder="Select a Size" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="material">Material</label>
                    <CustomDropdown id="material" value={product.material} options={materials} onChange={(e) => handleDropdownChange(e, 'material')} optionLabel="name" placeholder="Select a Material" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="gender">Gender</label>
                    <CustomInputText id="gender" value={product.gender} onChange={(e) => handleInputChange(e, 'gender')} placeholder="Enter gender" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="available">Availability</label>
                    <CustomDropdown id="available" value={product.available} options={availability} onChange={(e) => handleDropdownChange(e, 'available')} optionLabel="name" placeholder="Select Availability" className="w-full" />
                </div>

                <div className="mb-4">
                    <label htmlFor="discount">Discount</label>
                    <CustomDropdown id="discount" value={product.discount} options={discounts} onChange={(e) => handleDropdownChange(e, 'discount')} optionLabel="label" placeholder="Select a Discount" className="w-full" />
                </div>
            </div>

            <Button1 label="Add Product" icon="pi pi-check" onClick={handleAdd} extraStyle="h-12" />
        </div>
    );
};

export default AddProducts;
