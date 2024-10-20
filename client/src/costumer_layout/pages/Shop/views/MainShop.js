import React,{useState, useEffect} from 'react';
import Header from '../../../components/Header';
import SpecialOffers from '../sections/SpecialOffers';
import Brands from '../sections/Brands';
import Filter from '../../../components/filter/Filter';
import  Footer  from '../../../components/Footer';
import TagFilter from '../sections/TagFilter';
import Shop from './tagsViews/Shop';
import Products from './tagsViews/Products';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts} from '../../../../store/features/products/productsSlice';



const MainShop = () => {

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const filters = useSelector((state) => state.products.filters);
  const selectedCategory = useSelector((state) => state.products.filters.category);
  const selectedSubcategory = useSelector((state) => state.products.filters.subcategory);

  
 

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts(filters)).catch(error => console.error('Error fetching products:', error));
    }
  }, [dispatch, filters, productStatus]);

 
  

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  }
  const renderLayout = () => {
    const hasSelectedCategories = selectedCategory.length > 0;
    const hasSelectedSubcategories = selectedSubcategory.length > 0;

    if (hasSelectedCategories || hasSelectedSubcategories) {
        // If any category is selected in the filters tab or via tags, display the Products component
        return <Products toggleFilters={toggleFilters} products={products}/>;
    } else {
        return <Shop products={products} />;
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
          
            <Filter isOpen={isFiltersOpen} handleToggleFilter={toggleFilters}/>
          <section className={`flex flex-col justify-center items-start gap-10 xl:w-[calc(100%-350px)] ${isFiltersOpen ? 'w-full sm:w-full tablet:w-[calc(100%-374px)] ' : 'max-xl:w-[calc(100%-90px)] '}`}>
    
              <TagFilter  limit={10}  />
              {renderLayout()}
          </section>
        </section>
        <Footer/>

    </main>
  )
}



export default MainShop