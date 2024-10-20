import React, { useState, useEffect, useMemo } from 'react';
import CostumInputText from '../../components/costum/CostumInput';
import CostumDropdown from '../../components/costum/CostumDropdown';
import CostumFileInput from '../../components/costum/CostumFileInput';
import CostumDateInput from '../../components/costum/CostumDateInput';
import { fetchCategories } from '../../../store/features/categories/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubCategories } from '../../../store/features/subcategories/subCategoriesSlice';
import { fetchBrands } from '../../../store/features/brands/brandsSlice';
import { addProduct } from '../../../store/features/products/productsSlice';

const AddProduct = () => {

    const dispatch = useDispatch();
    const {items: categories = [] , status: categoriesStatus, error: categoriesError} = useSelector((state) => state.categories);
    const {items: subCategories = [] , status: subCategoriesStatus, error:  subCategoriesError} = useSelector((state) => state.subCategories);
    const {items: brands = [], status: brandsStatus, error: brandsError} = useSelector((state) => state.brands);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        subcategory: '',
        img: [],
        description: '',
        oldPrice: '',
        price: '',
        brand: '',
        color: '',
        size: '',
        material: '',
        gender: '',
        available: '',
        discount: '',
        weight: '',
        dimensions: '',
        ingredients: '',
        dosage: '',
        expiryDate: '',
        usageInstructions: ''
    });
    
  
 
    
    useEffect(() => {
        if (categoriesStatus === 'idle') {
            dispatch(fetchCategories());
        }
    }, [categoriesStatus, dispatch]);
    
    useEffect(() => {
        if (subCategoriesStatus === 'idle') {
            dispatch(fetchSubCategories());
        }
    }, [subCategoriesStatus, dispatch]);
    
    useEffect(() => {
        if (brandsStatus === 'idle') {
            dispatch(fetchBrands());
        }
    }, [brandsStatus, dispatch]);
    

    const filteredSubCategories = useMemo(() => {
        if (formData.category) {
            return subCategories.filter(subCategory => subCategory.category._id === formData.category);
        }
        return [];
    }, [formData.category, subCategories]);
    

      const handleChange = (name, value) => { 
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleDropdownChange = (field, selectedOption) => {
        setFormData((prev) => ({
            ...prev,
            [field]: selectedOption.value, // Store the ID of the selected option
        }));
    };
    
    
      
    
    const handleFileChange = (newFiles) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            img: newFiles
        }));
    };
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate form data (basic validation)
        if (!formData.name || !formData.category || !formData.subcategory || !formData.price) {
            alert('Please fill out all required fields.');
            return;
        }
    
        // Prepare form data for submission
        const productData = new FormData();
        for (const key in formData) {
            if (key === 'img') {
                formData.img.forEach(file => {
                    productData.append('images', file.file); // Ensure the field name matches 'images'
                });
            } else {
                productData.append(key, formData[key]);
            }
        }
    
        try {
            // Dispatch the addProduct action
            await dispatch(addProduct(productData)).unwrap(); // Assuming addProduct returns a promise
            alert('Product added successfully!');
            // Reset form or redirect after successful submission
            setFormData({
                name: '',
                category: '',
                subcategory: '',
                img: [],
                description: '',
                oldPrice: '',
                price: '',
                brand: '',
                color: '',
                size: '',
                material: '',
                gender: '',
                available: '',
                discount: '',
                weight: '',
                dimensions: '',
                ingredients: '',
                dosage: '',
                expiryDate: '',
                usageInstructions: ''
            });
        } catch (error) {
            alert('Failed to add product: ' + error.message);
        }
    };
    
    const handleDateChange = (name, date) => {
        setFormData({
          ...formData,
          [name]: date
        });
      };

    const renderAdditionalFields = () => {
        switch(formData.category) {
            case 'Fitness' :
                return(
                    <>
                        <div>
                            <label className="block mb-1" htmlFor="weight">Weight</label>
                            <CostumInputText
                                type="text"
                                id="weight"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="dimensions">Dimensions</label>
                            <CostumInputText
                                type="text"
                                id="dimensions"
                                name="dimensions"
                                value={formData.dimensions}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="dimensions">Gender</label>
                            <CostumInputText
                                type="text"
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="dimensions">Size</label>
                            <CostumInputText
                                type="text"
                                id="size"
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="dimensions">Material</label>
                            <CostumInputText
                                type="text"
                                id="material"
                                name="material"
                                value={formData.material}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        
                        

                    </>
                );
            case "Health": 
            return(
                <>
                        <div>
                            <label className="block mb-1" htmlFor="weight">Weight</label>
                            <CostumInputText
                                type="text"
                                id="weight"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="color">Ingredients</label>
                            <CostumInputText
                                type="text"
                                id="ingredients"
                                name="ingredients"
                                value={formData.ingredients}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="color">Dosage</label>
                            <CostumInputText
                                type="text"
                                id="dosage"
                                name="dosage"
                                value={formData.dosage}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="color">Expiry Date</label>
                            <CostumDateInput
                                label="Expiry Date"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleDateChange}
                                placeholder="Select a date"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="color">Usage instructions</label>
                            <CostumInputText
                                type="text"
                                id="usageInstructions"
                                name="usageInstructions"
                                value={formData.usageInstructions}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </>
            );
            case "Beauty" : 
            return(
                <>
                       <div>
                            <label className="block mb-1" htmlFor="color">Ingredients</label>
                            <CostumInputText
                                type="text"
                                id="ingredients"
                                name="ingredients"
                                value={formData.ingredients}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="color">Expiry Date</label>
                            <CostumDateInput
                                label="Expiry Date"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleDateChange}
                                placeholder="Select a date"
                            />
                        </div>
                </>
            )

        }
    }

    if (categoriesStatus === 'loading' || subCategoriesStatus === 'loading') {
        return <div>Loading...</div>;
      }
    
      if (categoriesStatus === 'failed') {
        return <div>Error: {categoriesError}</div>;
      }
    
      if (subCategoriesStatus === 'failed') {
        return <div>Error: {subCategoriesError}</div>;
      }

    return (
        <div className="padding-x mx-auto py-4 ">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex justify-between w-full gap-10 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div>
                            <label className="block mb-1" htmlFor="name">Product Name</label>
                            <CostumInputText
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="category">Category</label>
                            <CostumDropdown
    placeholder="Select category"
    options={categories.map(category => ({ value: category._id, label: category.name }))}
    value={formData.category} // Ensure this is the category ID
    onChange={(option) => handleDropdownChange('category', option)} // Pass the entire option object
    optionLabel="label"
    required
    className="w-full rounded"
/>
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="subcategory">SubCategory</label>
                            <CostumDropdown
                                placeholder="Select sub category"
                                options={filteredSubCategories.map(subCategory => ({ value: subCategory._id, label: subCategory.name }))}
                                value={formData.subcategory} // This should be the subcategory ID
                                onChange={(option) => handleDropdownChange('subcategory', option)} // Pass the entire option object
                                optionLabel="label"
                                required
                                className="w-full rounded"
                            />
                        </div>
                        
                        <div>
                            <label className="block mb-1" htmlFor="oldPrice">Old Price</label>
                            <CostumInputText
                                type="text"
                                id="oldPrice"
                                name="oldPrice"
                                value={formData.oldPrice}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="price">Price</label>
                            <CostumInputText
                                type="text"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="brand">Brand</label>
                            <CostumDropdown
                                placeholder="Select Brand"
                                id="brand"
                                name="brand"
                                options={brands.map(brand => ({ value: brand._id, label: brand.name }))}
    value={formData.brand}
    onChange={(value) => handleDropdownChange('brand', value)}
                                optionLabel="label"
                                className="w-full  rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="available">Availability</label>
                            <CostumDropdown
                                type="text"
                                id="available"
                                name="available"
                                value={formData.available}
                                onChange={handleChange}
                                className="w-full  rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1" htmlFor="discount">Discount</label>
                            <CostumInputText
                                type="text"
                                id="discount"
                                name="discount"
                                value={formData.discount}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        {renderAdditionalFields()}
                        
                    </div>
                    <div className="flex flex-col justify-between w-full">
                        <div className='flex-1'>
                            <label className="block mb-1" htmlFor="img">Image </label>
                            <CostumFileInput
                                onFileChange={handleFileChange}
                                className="w-full rounded "
                            />
                        </div>


                         <div className='flex-1 mt-4'>
                            <label className="block mb-1" htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full p-2  border border-gray-300 rounded "
                            />
                        </div>
                        
                        
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded" >Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
