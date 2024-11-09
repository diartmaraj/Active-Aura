import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../../../store/features/categories/categorySlice';
import { fetchProducts, fetchProductsByCategory } from '../../../../store/features/products/productsSlice';
import { Circles } from 'react-loader-spinner';

const CategorySelector = ({ setSelectedCategoryId, selectedCategoryId }) => {
  const dispatch = useDispatch();
  const {items: categories = [], status: categoriesStatus, error: categoriesError } = useSelector((state) => state.categories);
  useEffect(() => {
    if (categoriesStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [dispatch, categoriesStatus]);

  useEffect(() => {
    if (selectedCategoryId === 'all') {
      dispatch(fetchProducts()); 
    }
  }, [selectedCategoryId])

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
    if (categoryId === 'all') {
      dispatch(fetchProducts()); 
    } else {
      dispatch(fetchProductsByCategory(categoryId));
    }

  };
  

  if (categoriesStatus === 'loading') {
    return (
      <div className="flex justify-center items-center w-full">
        <Circles 
          height="80" 
          width="80" 
          color="#4fa94d" 
          ariaLabel="circles-loading" 
          wrapperStyle={{}} 
          wrapperClass="" 
          visible={true} 
        />
      </div>
    );
  }
  if (categoriesStatus === 'failed') {
    return <div>Error: {categoriesError}</div>;
  }

  if (!categories || categories.length === 0) {
    return <div>No categories available</div>;
  }
  const allCategories = [{ _id: 'all', name: 'All' }, ...categories];

  return (
    <div className="flex relative justify-center items-center w-full pb-6 max-[280px]:overflow-x-scroll">
      <div className="flex justify-center items-center gap-10">
        {allCategories.map((category) => (
          
          <div
            key={category._id}
            className={`text-center font-bold text-lg max-sm:text-sm pb-1 cursor-pointer ${selectedCategoryId === category._id ? 'border-b-4 border-secondary_1' : ''}`}
            onClick={() => handleCategorySelect(category._id)}
          >
            <h1>{category.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
