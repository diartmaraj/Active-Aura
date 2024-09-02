import React,{useState, useEffect} from 'react';
import Header from '../../../components/Header';
import SpecialOffers from '../sections/SpecialOffers';
import Brands from '../sections/Brands';
import Filter from '../../../components/Filter';
import  Footer  from '../../../components/Footer';
import TagFilter from '../sections/TagFilter';
import Shop from './tagsViews/Shop';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Products from './tagsViews/Products';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleCategory,
  toggleBrand,
  toggleRating,
  toggleDiscount,
  applyFilters,
  resetFilters,
  applyCategory,
  removeCategory,
} from '../../../store/features/filter/filterSlice';
import { selectFilteredProducts } from '../../../store/features/selector';



const MainShop = () => {

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const filteredProducts = useSelector(selectFilteredProducts);
  const categoryState = useSelector((state) => state.filters.categories);


  const handleFilters = {
    handleCategoryChange: (category) => {
      dispatch(toggleCategory(category));
    },
    handleBrandChange: (brand) => {
      dispatch(toggleBrand(brand));
    },
    handleRatingChange: (rating) => {
      dispatch(toggleRating(rating));
    },
    handleDiscountChange: (discount) => {
      dispatch(toggleDiscount(discount));
    },
    handleApplyFilters: () => {
      dispatch(applyFilters());
    },
    handleResetFilters: () => {
      dispatch(resetFilters());
    },
    handleAppliedCategories: () => {
      dispatch(applyCategory());
    },
    handleRemoveCategory: () => {
      dispatch(removeCategory());
    }
  };



  useEffect(() => {
    // Save selected tag to localStorage
    localStorage.setItem('selectedTag', categoryState);
  }, [categoryState]);

  useEffect(() => {
    const currentPath = location.pathname.split('/').pop();
    const tag = currentPath.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
  }, [location]);
  
  

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  }
  const renderLayout = () => {

    if (categoryState.length > 0 ) {
        // If any category is selected in the filters tab or via tags, display the Products component
        return <Products toggleFilters={toggleFilters} filteredProducts={filteredProducts} />;
    } else {
        return <Shop filteredProducts={filteredProducts} />;
    }
};


 
  return (
    <main className='relative'>
        <Header/>
        <section>
            <SpecialOffers/>
        </section>
        <section className='padding-x padding-y'>
          <Brands/>
        </section>
        <section className={`flex flex-col relative tablet:flex-row w-full ${isFiltersOpen ? "gap-6": "gap-10"} justify-center items-start max-sm:items-center xl:padding-x padding-b`}>
          
            <Filter isOpen={isFiltersOpen} handleToggleFilter={toggleFilters} handleFilters={handleFilters} />
          <section className={`flex flex-col justify-center items-center gap-10 xl:w-[calc(100%-350px)] ${isFiltersOpen ? 'w-full sm:w-full tablet:w-[calc(100%-374px)] ' : 'max-xl:w-[calc(100%-90px)] '}`}>
    
              <TagFilter  limit={10}  />
              {renderLayout()}
          </section>
        </section>
        <Footer/>

    </main>
  )
}



export default MainShop