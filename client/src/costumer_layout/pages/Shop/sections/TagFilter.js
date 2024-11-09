import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../../../store/features/categories/categorySlice';
import { fetchSubCategories } from '../../../../store/features/subcategories/subCategoriesSlice';
import { fetchProducts, setFilter } from '../../../../store/features/products/productsSlice';

const TagFilter = ({ limit, selectedTag}) => {
  const dispatch = useDispatch();
  const selectedCategoryIds = useSelector((state) => state.products.filters.category);
  const selectedSubcategoryIds = useSelector((state) => state.products.filters.subcategory);

  const { items: categories = [], status: categoriesStatus } = useSelector((state) => state.categories || {});
  const { items: subcategories = [], status: subCategoriesStatus } = useSelector((state) => state.subCategories || {});
  const filters = useSelector((state) => state.products.filters);


  const handleTagClick = (filterType, tagId) => {
    console.log(tagId);
    console.log(filterType);
    const isSelected = selectedTags.some((tag) => tag.id === tagId);
    dispatch(setFilter({ filterType, value: tagId, checked: !isSelected }));
  };

  const handleTag = (filterType, tagId) => handleTagClick(filterType,tagId);

  useEffect(() => {
    // Only fetch products if there's at least one filter set
    if (filters.category.length > 0 || filters.subcategory.length > 0) {
        dispatch(fetchProducts(filters));
    }
}, [filters, dispatch]);

useEffect(() => {
  if (categoriesStatus === 'idle') {
    dispatch(fetchCategories());
  }
  if (subCategoriesStatus === 'idle') {
    dispatch(fetchSubCategories());
  }
},  [categoriesStatus, subCategoriesStatus, dispatch]);

const handleRemoveTag = (tag) => {
  const filterType = categories.some((cat) => cat.name === tag) ? 'category' : 'subcategory';
  const tagId = filterType === 'category'
    ? categories.find((cat) => cat.name === tag)._id
    : subcategories.find((subcat) => subcat.name === tag)._id;

  dispatch(setFilter({ filterType, value: tagId, checked: false }));
};
  const availableTags = [
    ...categories.map((category) => ({ id: category._id, name: category.name, type: 'category' })),
    ...subcategories.map((subcategory) => ({ id: subcategory._id, name: subcategory.name, type: 'subcategory' }))
  ];

  const selectedTags = [
    ...categories.filter(cat => selectedCategoryIds.includes(cat._id)).map(cat => cat.name),
    ...subcategories.filter(subcat => selectedSubcategoryIds.includes(subcat._id)).map(subcat => subcat.name)
];
 



  const displaySelectedTags = selectedTags.length === 1 
    ? `${selectedTags[0]}`
    : selectedTags.length > 1 
    ? `${selectedTags.join(', ')}.` 
    : 'Shop'
  
  return (
    <div className="flex flex-col flex-wrap gap-4 justify-start items-start  mt-4 padding-x">
        <div>
            <h1 className='text-lg font-bold text-black'> {displaySelectedTags}</h1>
        </div>
        <div className='flex flex-wrap gap-4 justify-start mt-4 padding-x'>
        {selectedTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleRemoveTag(tag)}
            className="px-4 py-2 border font-semibold rounded-lg bg-secondary_1 text-white"
          >
            {tag}
          </button>
        ))} 
      </div>
        <div>
            <div className='flex flex-wrap gap-4 justify-start mt-4 padding-x'>
                {availableTags.slice(0, limit).map((tag, index) => (
                    <button
                        key={index}
                        onClick={() => handleTag(tag.type, tag.id)}
                        className="px-4 py-2 border font-semibold rounded-lg hover:bg-secondary_1 hover:text-white"
                    >
                        {tag.name}
                    </button>
                ))}
            </div>
        </div>
    </div>
);
};

export default TagFilter;
