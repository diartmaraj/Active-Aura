import React, { useState, useEffect } from 'react';
import { IoClose, IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';
import { IoFilter } from "react-icons/io5";
import Button1 from '../buttons/Button1';
import { setFilter, resetFilters, fetchProducts } from '../../../store/features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';


import { MdOutlineCategory } from 'react-icons/md';
import { IoPricetagsOutline, IoStorefrontOutline, IoStarOutline, IoGiftOutline, IoColorPaletteOutline, IoResizeOutline, IoShirtOutline, IoManOutline, IoTimeOutline} from 'react-icons/io5';
import { Slider } from 'primereact/slider';
import { ratings,availability,discounts, materials, colors, sizes } from './FilterOptions';
import { fetchCategories } from '../../../store/features/categories/categorySlice';
import { fetchBrands } from '../../../store/features/brands/brandsSlice';
import { fetchSubCategories } from '../../../store/features/subcategories/subCategoriesSlice';

const Filter = ({ isOpen, handleToggleFilter}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [openSections, setOpenSections] = useState({});
    const { items: categories = [], status: categoriesStatus } = useSelector((state) => state.categories || {});
    const { items: subcategories = [], status: subCategoriesStatus } = useSelector((state) => state.subCategories || {});
    const { items: brands = [], status: brandsStatus } = useSelector((state) => state.brands || {});
    const productStatus = useSelector((state) => state.products.status);

    const dispatch = useDispatch();
    const filtersState = useSelector((state) => state.products.filters);

    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        subcategory: [],
        brand: [],
        rating: [],
        discount: [],
        color: [],
        size: [],
        material: [],
        gender: [],
        availability: []
    });
   
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
      }, [categoriesStatus,subCategoriesStatus, brandsStatus, dispatch]);


      const handleChange = (filterType, value, checked) => {
    setSelectedFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };

        if (checked) {
            updatedFilters[filterType] = [...updatedFilters[filterType], value];
        } else {
            updatedFilters[filterType] = updatedFilters[filterType].filter(item => item !== value);
        }

        return updatedFilters;
    });
};
    const handleResetFilters = () => {
        setSelectedFilters({
            category: [],
            subcategory: [],
            brand: [],
            rating: [],
            discount: [],
            color: [],
            size: [],
            material: [],
            gender: [],
            availability: []
        });
       
        dispatch(resetFilters());
        dispatch(fetchProducts({}));
    };

    const toggleSection = (sectionName) => {
        setOpenSections((prevSections) => ({
            ...prevSections,
            [sectionName]: !prevSections[sectionName],
        }));
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to set the screen width

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getLayout = () => {
        if (screenWidth < 640) return 'max-small'; 
        if (screenWidth >= 640 && screenWidth < 904) return 'small'; 
        if (screenWidth >= 904 && screenWidth < 1280) return 'tablet'; 
        return 'xlarge'; // Default for screenWidth >= 1280
    };
    
    const handleApplyFilters = () => {
        Object.keys(selectedFilters).forEach((filterType) => {
            selectedFilters[filterType].forEach((value) => {
                dispatch(setFilter({
                    filterType,
                    value,
                    checked: true
                }));
            });

            // Dispatch an action for each value that should be unchecked in the Redux state
            filtersState[filterType].forEach((value) => {
                if (!selectedFilters[filterType].includes(value)) {
                    dispatch(setFilter({
                        filterType,
                        value,
                        checked: false
                    }));
                }
            });
        });
    };
    useEffect(() =>{
        console.log('local filters State', selectedFilters)
        console.log('current filters state from redux', filtersState)
        dispatch(fetchProducts(filtersState))
    }, [filtersState,selectedFilters, dispatch])


    

     const handleCategoryChange = (value, checked) => handleChange('category', value, checked);
      const  handleSubcategoryChange = (value, checked) => handleChange('subcategory', value, checked);
      const handleBrandChange = (value, checked) => handleChange('brand', value, checked)
      const handleRatingChange = (value, checked) => handleChange('rating', value, checked);
      const handleDiscountChange = (value, checked) => handleChange('discount', value, checked);
     const handleColorChange = (value, checked) => handleChange('color', value, checked);
     const handleSizeChange = (value, checked) => handleChange('size', value, checked);
     const handleMaterialChange = (value, checked) => handleChange('material', value, checked);
     const handleGenderChange = (value, checked) => handleChange('gender', value, checked);
     const handleAvailabilityChange = (value, checked) => handleChange('availability', value, checked);

      const filters = [
        {
          name: "Category",
          icon: <MdOutlineCategory />,
          content: (
            <div className="flex flex-col justify-content-center">
              {categories.map((category, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div
                    className="flex justify-between items-center w-full cursor-pointer border-b-2 py-2"
                    onClick={() => toggleSection(category.name)}
                  >
                    <div className="flex justify-center items-center">
                      <label className="flex items-center text-sm font-medium text-gray-700 ">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 mr-2"
                          onChange={(e) => handleCategoryChange(category._id, e.target.checked)}
                          checked={selectedFilters['category']?.includes(category._id)}
                        />
                        <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                      </label>
                    </div>
                    {openSections[category.name] ? (
                      <IoChevronUp size={16} className='text-black' />
                    ) : (
                      <IoChevronDown size={16} className='text-black' />
                    )}
                  </div>
                  {openSections[category.name] && subcategories && (
                    <div className="flex flex-col mt-2 pl-4 w-full">
                        {subcategories
                .filter((subCategory) => subCategory.category._id === category._id)
                .map((subcategory) => (
                    <label key={subcategory._id} className="inline-flex items-center mt-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
                      onChange={(e) => handleSubcategoryChange(subcategory._id, e.target.checked)}
                      checked={selectedFilters['subcategory']?.includes(subcategory._id)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{subcategory.name}</span>
                  </label>
                ))}
                      
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        },
        {
          name: "Price Range",
          icon: <IoPricetagsOutline size={20} />,
          content: (
            <div className="card flex justify-center">
              <Slider range />
            </div>
          )
        },
        {
          name: "Brands",
          icon: <IoStorefrontOutline size={20} />,
          content: (
            <div className="flex flex-col justify-content-center">
              {brands.map((brand, index) => (
                <div key={index} className="flex flex-row items-center">
                  <label key={index} className="inline-flex items-center mt-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" onChange={(e) => handleBrandChange(brand._id, e.target.checked)}
                    checked={selectedFilters['brand']?.includes(brand._id)} />
                    <span className="ml-2 text-sm text-gray-700">{brand.name}</span>
                  </label>
                </div>
              ))}
            </div>
          )
        },
        {
          name: "Ratings",
          icon: <IoStarOutline size={20} />,
          content: (
            <div className="flex flex-col justify-content-center">
              {ratings.map((rating, index) => (
                <div key={index} className="flex flex-row items-center">
                  <label key={index} className="inline-flex items-center mt-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" onChange={(e) => handleRatingChange(rating.value, e.target.checked)}
                    checked={selectedFilters['rating']?.includes(rating.value)} />
                    <span className="ml-2 flex flex-row text-sm text-gray-700">{rating.stars}</span>
                  </label>
                </div>
              ))}
            </div>
          )
        },
        {
          name: "Discount Offers",
          icon: <IoGiftOutline size={20} />,
          content: (
            <div className="flex flex-col justify-content-center">
              {discounts.map((discount, index) => (
                <div key={index} className="flex flex-row items-center">
                  <label key={index} className="inline-flex items-center mt-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" onChange={(e) => handleDiscountChange(discount.label, e.target.checked)}
                    checked={selectedFilters['discount']?.includes(discount.label)} />
                    <span className="ml-2 flex flex-row text-sm text-gray-700">{discount.label}</span>
                  </label>
                </div>
              ))}
            </div>
          )
        },
        {
          name: "Color",
          icon: <IoColorPaletteOutline size={20} />,
          content: (
            <div className="flex flex-col justify-content-center">
              {colors.map((color, index) => (
                <div key={index} className="flex flex-row items-center">
                  <label key={index} className="inline-flex items-center mt-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" onChange={(e) => handleColorChange(color.name, e.target.checked)} 
                    checked={selectedFilters['color']?.includes(color.name)}/>
                    <svg width="20" height="20" className="ml-2 rounded-md">
                      <rect width="20" height="20" fill={color.hex} />
                    </svg>
                    <span className="ml-2 flex flex-row text-sm text-gray-700 mr-2">{color.name}</span>
                  </label>
                </div>
              ))}
            </div>
          )
        },
        {
          name: "Size",
          icon: <IoResizeOutline size={20} />,
          content: (
            <div className="flex flex-col justify-content-center">
              {sizes.map((size, index) => (
                <div key={index} className="flex flex-row items-center">
                  <label key={index} className="inline-flex items-center mt-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" onChange={(e) => handleSizeChange(size.label, e.target.checked)} 
                    checked={selectedFilters['size']?.includes(size.label)}/>
                    <span className="ml-2 flex flex-row text-sm text-gray-700 mr-2">{size.name}</span>
                  </label>
                </div>
              ))}
            </div>
          )
        },
        {
          name: "Material",
          icon: <IoShirtOutline size={20} />,
          content: (
            <div className="flex flex-col justify-content-center">
              {materials.map((material, index) => (
                <div key={index} className="flex flex-row items-center">
                  <label key={index} className="inline-flex items-center mt-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" onChange={(e) => handleMaterialChange(material.name, e.target.checked)}
                    checked={selectedFilters['material']?.includes(material.name)} />
                    <span className="ml-2 flex flex-row text-sm text-gray-700 mr-2">{material.name}</span>
                  </label>
                </div>
              ))}
            </div>
          )
        },
        {
          name: "Gender",
          icon: <IoManOutline size={20} />,
          content: (
            <div className="flex flex-col justify-content-center">
              <div className="flex flex-row items-center">
                <label className="inline-flex items-center mt-1">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" onChange={(e) => handleGenderChange('Male', e.target.checked)} />
                  <span className="ml-2 flex flex-row text-sm text-gray-700 mr-2">Male</span>
                </label>
              </div>
              <div className="flex flex-row items-center">
                <label className="inline-flex items-center mt-1">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" onChange={(e) => handleGenderChange('Female', e.target.checked)} />
                  <span className="ml-2 flex flex-row text-sm text-gray-700 mr-2">Female</span>
                </label>
              </div>
            </div>
          )
        },
        {
          name: "Product Availability",
          icon: <IoTimeOutline size={20} />,
          content: (
            <div className="flex flex-col justify-content-center">
              {availability.map((available, index) => (
                <div key={index} className="flex flex-row items-center">
                  <label key={index} className="inline-flex items-center mt-1">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" onChange={(e) => handleAvailabilityChange(available.name, e.target.checked)} 
                    checked={selectedFilters['availability']?.includes(available.name)}/>
                    <span className="ml-2 flex flex-row text-sm text-gray-700 mr-2">{available.name}</span>
                  </label>
                </div>
              ))}
            </div>
          )
        }
      ];

    const renderFilter = () => {
        const layout = getLayout(); // Call getLayout to get the layout value
 
        
        if (layout === 'max-small') {
            return (
                <div className={`fixed inset-0 z-50  bg-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto pt-10 `}>
                    {isOpen ? (
                    <div
                        className={`fixed top-4 left-4 z-20  cursor-pointer p-2 bg-white shadow-md rounded-full xl:hidden`}
                        onClick={handleToggleFilter}
                    >
                         <IoClose size={24} /> 
                    </div>
                    ) : "" }
                    {isOpen && (
                        <div className='absolute w-screen h-screen bg-white padding-x'>
                           <div className='flex flex-row justify-end items-center gap-2 pr-6'>
                                    <Button1 label="Apply" extraStyle="h-10"  onClick={() => handleApplyFilters()}/>
                                <Button1 label="Reset filters" extraStyle="h-10" onClick={() => handleResetFilters()}/>

                                </div>
                            <div className='flex flex-col justify-center items-start gap-4 mt-20 w-full'>
                            {filters.map((filter, index) => (
                                    <div key={index} className="flex flex-col justify-center  mb-2 w-full">
                                        <div className='flex justify-between items-center cursor-pointer w-full border-b-2 pb-2' onClick={() => toggleSection(filter.name)}>
                                            <div className='flex justify-center items-center gap-4 '>
                                            {filter.icon}
                                            <label className='block text-sm font-medium text-black'>{filter.name}</label>
                                            </div>
                                            {openSections[filter.name] ? (
                                                <IoChevronUp size={16} className='text-black'/>
                                            ) : (
                                                <IoChevronDown size={16} className='text-black'/>
                                            )}
                                        </div>
                                        {openSections[filter.name] && (
                                            <div className='flex flex-col  mt-2 pl-2 w-full'>
                                                {filter.content}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            );
        }
        else if(layout === 'small') {
            return(
                <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-gradient-to-b bg-white  shadow-lg z-30 transform  ${
         isOpen ? "translate-x-0" : "-translate-x-full"} `}
                 >
      <FaTimes
        onClick={handleToggleFilter}
        className="absolute top-4 right-4 text-2xl cursor-pointer text-black hover:text-red-500 transition-colors duration-300"
      />

      
            {isOpen && (
                        <div className='flex flex-col justify-start items-start pt-20 px-6 w-full h-full bg-white  overflow-y-auto pb-10'>
                            <div className='flex flex-col justify-center items-start gap-4 pt-5 w-full'>
                            <div className='flex flex-row justify-start items-center gap-2'>
                                    <Button1 label="Apply" extraStyle="h-10"  onClick={() => handleApplyFilters()}/>
                                <Button1 label="Reset filters" extraStyle="h-10" onClick={() => handleResetFilters()}/>

                                </div>
                                <div className='flex flex-col justify-center items-start gap-4 mt-20 w-full's>
                                {filters.map((filter, index) => (
                                    <div key={index} className="flex flex-col justify-center  mb-2 w-full">
                                        <div className='flex justify-between items-center cursor-pointer w-full border-b-2 pb-2' onClick={() => toggleSection(filter.name)}>
                                            <div className='flex justify-center items-center gap-4 '>
                                            {filter.icon}
                                            <label className='block text-sm font-medium text-black'>{filter.name}</label>
                                            </div>
                                            {openSections[filter.name] ? (
                                                <IoChevronUp size={16} className='text-black'/>
                                            ) : (
                                                <IoChevronDown size={16} className='text-black'/>
                                            )}
                                        </div>
                                        {openSections[filter.name] && (
                                            <div className='flex flex-col  mt-2 pl-2 w-full'>
                                                {filter.content}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            )
        }
        else if(layout === 'tablet'){
            return(
                <div  className={`flex flex-col w-full rounded-lg shadow-lg pb-10 ${isOpen ? 'w-[350px]' : 'max-xl:w-[50px]'}`}
         >  
                <div className=' flex flex-col w-full '>
                    <div className={`flex justify-end items-end p-2`}>
                        <button
                            className='p-2 bg-gray-100 rounded-full'
                            onClick={handleToggleFilter}
                        >
                            {isOpen ? <IoClose size={20} /> : <IoFilter size={20} />}
                        </button>
                    </div>
                    {isOpen ? (
                            <div className='flex flex-col justify-center items-start gap-4 mt-5 px-4 w-full'>
                                 <div className='flex flex-row justify-start items-center gap-2'>
                                    <Button1 label="Apply" extraStyle="h-10"  onClick={() => handleApplyFilters()}/>
                                <Button1 label="Reset filters" extraStyle="h-10" onClick={() => handleResetFilters()}/>

                                </div>
                                {filters.map((filter, index) => (
                                    <div key={index} className="flex flex-col w-full">
                                        <div className='flex justify-between items-center cursor-pointer border-b-2 pb-2' onClick={() => toggleSection(filter.name)}>
                                        <div className='flex justify-center items-center gap-4 '>
                                            {filter.icon}
                                            <label className='block text-sm font-medium text-gray-700'>{filter.name}</label>
                                            </div>
                                            {openSections[filter.name] ? (
                                                <IoChevronUp size={16} />
                                            ) : (
                                                <IoChevronDown size={16} />
                                            )}
                                        </div>
                                        {openSections[filter.name] && (
                                            <div className='flex flex-col mt-2 pl-2 w-full'>
                                                {filter.content}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='flex flex-col justify-start items-center gap-4 mt-5 px-4'>
                                {filters.map((filter, index) => (
                                    <div key={index} className="flex justify-end items-center  w-full">
                                        {filter.icon}
                                    </div>
                                ))}
                            </div>
                        )}
                </div>
            </div>
            )
        }
        else if(layout === 'xlarge'){
            return(
                <div className={`flex  justify-center h-fit py-6 items-start z-10  w-[350px] shadow-lg rounded-lg   bg-white `}>
                    
                <div className=' flex flex-col w-full '>

                            <div className='flex flex-col justify-center items-start gap-4 mt-5 px-4 w-full'>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <Button1 label="Apply" extraStyle="h-10"  onClick={() => handleApplyFilters()}/>
                                <Button1 label="Reset filters" extraStyle="h-10" onClick={() => handleResetFilters()}/>

                                </div>
                            
                                {filters.map((filter, index) => (
                                    <div key={index} className="flex flex-col w-full">
                                        <div className='flex justify-between items-center cursor-pointer gap-4 border-b-2 pb-2' onClick={() => toggleSection(filter.name)}>
                                        <div className='flex justify-center items-center gap-4 '>
                                            {filter.icon}
                                            
                                                <label className='block text-sm font-medium text-gray-700'>{filter.name}</label>
                                                </div>
                                            
                                            {openSections[filter.name] ? (
                                                <IoChevronUp size={16} />
                                            ) : (
                                                <IoChevronDown size={16} />
                                            )}
                                        </div>
                                        {openSections[filter.name] && (
                                            <div className='flex flex-col mt-2 pl-2 w-full'>
                                                {filter.content}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        
               
         </div>
         </div> // Ensure to handle other layouts if needed
    )}

    return null;
}

    return renderFilter();
};

export default Filter;
