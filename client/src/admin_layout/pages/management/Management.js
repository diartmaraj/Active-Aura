import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from '../../../store/features/categories/categorySlice';
import {
  fetchSubCategories,
  addSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from '../../../store/features/subcategories/subCategoriesSlice';
import {
  fetchBrands,
  addBrand,
  updateBrand,
  deleteBrand,
} from '../../../store/features/brands/brandsSlice';

const Management = () => {
  const dispatch = useDispatch();
  const { items: categories = [], status: categoriesStatus } = useSelector((state) => state.categories || {});
  const { items: subCategories = [], status: subCategoriesStatus } = useSelector((state) => state.subCategories || {});
  const { items: brands = [], status: brandsStatus } = useSelector((state) => state.brands || {});

  const [categoryName, setCategoryName] = useState('');
  const [subCategoryName, setSubCategoryName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [brandDescription, setBrandDescription] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showCategories, setShowCategories] = useState(true);
  const [showBrands, setShowBrands] = useState(true);

  useEffect(() => {
    if (categoriesStatus === 'idle') {
      dispatch(fetchCategories());
    }
    if (subCategoriesStatus === 'idle') {
      dispatch(fetchSubCategories());
    }
    if (brandsStatus === 'idle') {
      dispatch(fetchBrands());
    }
  }, [categoriesStatus, subCategoriesStatus, brandsStatus, dispatch]);

  const handleAddCategory = () => {
    dispatch(addCategory({ name: categoryName }));
    setCategoryName('');
  };

  const handleUpdateCategory = (categoryId) => {
    dispatch(updateCategory({ id: categoryId, name: categoryName }));
    setCategoryName('');
  };

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  const handleAddSubCategory = () => {
    if (selectedCategoryId) {
      dispatch(addSubCategory({ name: subCategoryName, categoryId: selectedCategoryId }));
      setSubCategoryName('');
    }
  };

  const handleUpdateSubCategory = (subCategoryId) => {
    dispatch(updateSubCategory({ id: subCategoryId, name: subCategoryName, categoryId: selectedCategoryId }));
    setSubCategoryName('');
  };

  const handleDeleteSubCategory = (subCategoryId) => {
    dispatch(deleteSubCategory(subCategoryId));
  };

  const handleAddBrand = () => {
    const formData = new FormData();
    formData.append('name', brandName);
    formData.append('description', brandDescription);
    if (selectedFile) {
      formData.append('image', selectedFile);
    }
    dispatch(addBrand(formData));
    setBrandName('');
    setBrandDescription('');
    setSelectedFile(null);
  };

  const handleUpdateBrand = (brandId) => {
    const formData = new FormData();
    formData.append('name', brandName);
    formData.append('description', brandDescription);
    if (selectedFile) {
      formData.append('image', selectedFile);
    }
    dispatch(updateBrand({ id: brandId, formData }));
    setBrandName('');
    setBrandDescription('');
    setSelectedFile(null);
  };

  const handleDeleteBrand = (brandId) => {
    dispatch(deleteBrand(brandId));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <button onClick={() => setShowCategories(!showCategories)} className="bg-gray-500 text-white p-2 rounded mb-4">
          {showCategories ? 'Hide Categories' : 'Show Categories'}
        </button>
        {showCategories && (
          <>
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="flex mb-4">
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Category Name"
                className="border border-gray-300 p-2 rounded mr-2 flex-grow"
              />
              <button onClick={handleAddCategory} className="bg-blue-500 text-white p-2 rounded">Add Category</button>
            </div>
            <ul className="mb-8">
              {categories.map((category) => (
                <li key={category._id} className="flex items-center mb-2">
                  <span className="flex-grow">{category.name}</span>
                  <button onClick={() => handleUpdateCategory(category._id)} className="bg-yellow-500 text-white p-2 rounded mr-2">Edit</button>
                  <button onClick={() => handleDeleteCategory(category._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold mb-4">SubCategories</h2>
            <div className="flex mb-4">
              <select
                onChange={(e) => setSelectedCategoryId(e.target.value)}
                value={selectedCategoryId || ''}
                className="border border-gray-300 p-2 rounded mr-2 flex-grow"
              >
                <option value="" disabled hidden>Select Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={subCategoryName}
                onChange={(e) => setSubCategoryName(e.target.value)}
                placeholder="SubCategory Name"
                className="border border-gray-300 p-2 rounded mr-2 flex-grow"
              />
              <button onClick={handleAddSubCategory} className="bg-blue-500 text-white p-2 rounded">Add SubCategory</button>
            </div>
            <ul>
              {subCategories
                .filter((subCategory) => subCategory.category._id === selectedCategoryId)
                .map((subCategory) => (
                  <li key={subCategory._id} className="flex items-center mb-2">
                    <span className="flex-grow">{subCategory.name}</span>
                    <button onClick={() => handleUpdateSubCategory(subCategory._id)} className="bg-yellow-500 text-white p-2 rounded mr-2">Edit</button>
                    <button onClick={() => handleDeleteSubCategory(subCategory._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
      <div>
        <button onClick={() => setShowBrands(!showBrands)} className="bg-gray-500 text-white p-2 rounded mb-4">
          {showBrands ? 'Hide Brands' : 'Show Brands'}
        </button>
        {showBrands && (
          <>
            <h2 className="text-2xl font-bold mb-4">Brands</h2>
            <div className="flex mb-4">
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Brand Name"
                className="border border-gray-300 p-2 rounded mr-2 flex-grow"
              />
              <input
                type="text"
                value={brandDescription}
                onChange={(e) => setBrandDescription(e.target.value)}
                placeholder="Brand Description"
                className="border border-gray-300 p-2 rounded mr-2 flex-grow"
              />
              <input type="file" onChange={handleFileChange} className="mr-2 flex-grow" />
              <button onClick={handleAddBrand} className="bg-blue-500 text-white p-2 rounded">Add Brand</button>
            </div>
            <ul className="mb-8">
              {brands.map((brand) => (
                <li key={brand._id} className="flex items-center mb-2">
                  <span className="flex-grow">{brand.name}</span>
                  <button onClick={() => handleUpdateBrand(brand._id)} className="bg-yellow-500 text-white p-2 rounded mr-2">Edit</button>
                  <button onClick={() => handleDeleteBrand(brand._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Management;
