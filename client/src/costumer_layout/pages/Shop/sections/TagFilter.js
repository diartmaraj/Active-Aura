import React, { useState, useEffect } from 'react';
import { getSubcategoryTags } from '../../../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCategory, removeCategory, resetFilters, applyCategory} from '../../../../store/features/filter/filterSlice';


const TagFilter = ({ limit, selectedTag}) => {
  const dispatch = useDispatch();
  const selectedTags = useSelector((state) => state.filters.categories);

  const availableTags = getSubcategoryTags();

  const handleTagClick = (tag) => {
    dispatch(toggleCategory(tag)); // Handle category toggle
    dispatch(applyCategory(tag)); // Set selected tag in Redux
};


  const handleRemoveTag = (tag) => {
    dispatch(removeCategory(tag));
  };

  const displaySelectedTags = selectedTags.length === 1 
    ? `${selectedTags[0]}`
    : selectedTags.length > 1 
    ? `${selectedTags.join(', ')}.` 
    : 'Shop'
  
  return (
    <div className="flex flex-col flex-wrap gap-4 justify-center mt-4 padding-x">
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
                        onClick={() => handleTagClick(tag)}
                        className="px-4 py-2 border font-semibold rounded-lg hover:bg-secondary_1 hover:text-white"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    </div>
);
};

export default TagFilter;
