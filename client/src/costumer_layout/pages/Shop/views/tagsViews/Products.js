import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { mostPopularProducts } from '../../../../../constants';
import ProductCard1 from "../../../../components/cards/ProductCard1";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import { MdOutlineViewCarousel } from "react-icons/md";
import {Dropdown} from "primereact/dropdown";
import { FaListUl } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import ListCard from '../../../../components/cards/ListCard';
import { useSelector } from 'react-redux';

const Products = ({toggleFilters , filteredProducts}) => {


    const [screenSizeTablet, setscreenSizeTablet] = useState(window.innerWidth >= 904);
    const [layout, setLayout] = useState('carousel');
    const [sort, setSort] = useState('');
   

    useEffect(() => {
        const handleResize = () => {
          setscreenSizeTablet(window.innerWidth >= 904);
        };
    
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
      

 
    const layoutOptions = [
        { label: 'Carousel', value: 'carousel', icon: <MdOutlineViewCarousel /> },
        { label: 'List', value: 'list', icon: <FaListUl /> },
        { label: 'Grid', value: 'grid', icon: <IoGridOutline /> }
    ];

    const sortBy = [
        { label: 'Popularity', value: 'popularity'},
        { label: 'New Arrivals', value: 'new_arrivals' },
        { label: 'Price: Low to High', value: 'price_asc'},
        { label: 'Price: High to low' , value: 'price_desc'}
    ]
    
    const renderProducts = () => {
        if (filteredProducts.length === 0) {
            return <p>No products found for the selected tag.</p>;
          }
        

        switch (layout) {
            case 'list':
                return (
                    <div className='w-full'>
                        {filteredProducts.map((product, index) => (
                            <ListCard 
                                key={index}
                                img={product.img}
                                productName={product.name}
                                category={product.category}
                                price={product.price}
                            />
                        ))}
                    </div>
                );
            case 'grid':
                return (
                    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                        {filteredProducts.map(product => (
                            <ProductCard1 
                                key={product.id}
                                img={product.img}
                                productName={product.name}
                                category={product.category}
                                price={product.price}
                            />
                        ))}
                    </div>
                );
            case 'carousel':
            default:
                return (
                    <div className='w-full h-[380px] costum-carousel padding-x '>
                        <Carousel 
                            showThumbs={false} 
                            showStatus={false} 
                            centerMode={screenSizeTablet}
                            centerSlidePercentage={screenSizeTablet ? 33.33 : 100}
                            className={`h-full `}
                        >
                            {filteredProducts.map((product, index) => (
                                <div key={index} className={`w-full h-full ${screenSizeTablet ? "px-5" : ""}`}>
                                    <ProductCard1 
                                        img={product.img}
                                        productName={product.name}
                                        category={product.category}
                                        price={product.price}
                                        imgHeight="h-36"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                );
        }
    };
  return (
    <section className='flex flex-col justify-center items-center w-full pb-10 padding-x'>
         <div className={` flex flex-col justify-start items-center gap-10 w-full`}>
        <div className={`flex justify-between items-center w-full gap-4 overflow-x-auto`}>
            <div className={`flex items-center gap-10 `}>
            <Dropdown 
                        value={sort} 
                        options={sortBy} 
                        onChange={(e) => setSort(e.value)} 
                        optionLabel="label" 
                        placeholder="Sort By"
                        className="w-full p-1 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm "
                        panelClassName="bg-white p-2 border border-gray-300 shadow-lg rounded-md"
                        itemTemplate={(option) => (
                            <div className="flex justify-start items-center">
                              <span>{option.label}</span>
                            </div>
                          )}
                          valueTemplate={(option) => option ? <span className='text-sm mr-2'>{option.label}</span> : <span className='text-sm mr-2'>Sort By</span>}
                    />
            <p className={`max-sm:text-sm text-base flex justify-center items-center gap-2 text-primary tablet:hidden cursor-pointer `} onClick={toggleFilters} >Filter <IoFilter /></p>
            </div>
            <div className='flex justify-center items-center '>
            <Dropdown 
                        value={layout} 
                        options={layoutOptions} 
                        onChange={(e) => setLayout(e.value)} 
                        optionLabel="label" 
                        placeholder="Select Layout"
                        className="w-full p-1 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm "
                        panelClassName="bg-white p-2 border border-gray-300 shadow-lg rounded-md"
                        itemTemplate={(option) => (
                            <div className="flex justify-start items-center">
                              <span className="mr-2">{option.icon}</span>
                              <span>{option.label}</span>
                            </div>
                          )}
                          valueTemplate={(option) => option ? <span className='text-lg '>{option.icon}</span> : <span className='text-sm '>Select Layout</span>}
                    />
            </div>
        </div >
        {renderProducts()}
        </div>
    </section>
  )
}

export default Products