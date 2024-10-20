import React from 'react'
import { IoFilter } from "react-icons/io5";
import ProductCard1 from "../../../components/cards/ProductCard1";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import { MdOutlineViewCarousel } from "react-icons/md";
import {Dropdown} from "primereact/dropdown";
import { FaListUl } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import ListCard from '../../../components/cards/ListCard';

const Recommended = ({toggleFilters,products }) => {

    const [screenSizeTablet, setscreenSizeTablet] = useState(window.innerWidth >= 904);
    const [layout, setLayout] = useState('carousel');

   

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

const renderProducts = () => {
    switch (layout) {
        case 'list':
            return (
                <div className='w-full'>
                    {products.map((product, index) => (
                        <ListCard 
                            key={index}
                            img={product.images || []}
                            productName={product.name}
                            category={product.category.name}
                            price={product.price}
                        />
                    ))}
                </div>
            );
        case 'grid':
            return (
                <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                    {products.map((product, index) => (
                        <ProductCard1 
                            key={index}
                            img={product.images || []}
                            productName={product.name}
                            category={product.category.name}
                            price={product.price}
                        />
                    ))}
                </div>
            );
        case 'carousel':
        default:
            return (
                <div className='w-full h-[380px] costum-carousel padding-x'>
                    <Carousel 
                        showThumbs={false} 
                        showStatus={false} 
                        centerMode={screenSizeTablet}
                        centerSlidePercentage={screenSizeTablet ? 33.33 : 100}
                        className={`h-full`}
                    >
                        {products.map((product, index) => (
                            <div key={index} className={`w-full h-full ${screenSizeTablet ? "px-5" : ""}`}>
                                <ProductCard1 
                                    img={product.images || []}
                                    productName={product.name}
                                    category={product.category.name}
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
    <section className='flex flex-col xl:flex-row justify-between items-start gap-10 w-full pb-10 padding-x'>
    <div className={`flex-1 flex flex-col  gap-10 w-full`}>
   <div className={`flex justify-between items-center w-full gap-4 overflow-x-auto`}>
       <div className={`flex items-center gap-10 `}>
       <p className='text-base font-semibold text-nowrap max-sm:text-sm'>Recommended for you</p> 
       <p className={`max-sm:text-sm text-base flex justify-center items-center gap-2 text-primary xl:hidden `} onClick={toggleFilters} >Filter <IoFilter /></p>
       </div>
       <div className='flex justify-center items-center'>
       <Dropdown 
                   value={layout} 
                   options={layoutOptions} 
                   onChange={(e) => setLayout(e.value)} 
                   optionLabel="label" 
                   placeholder="Select Layout"
                   className="w-full p-1 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm"
                   panelClassName="bg-white p-2 border border-gray-300 shadow-lg rounded-md"
                   itemTemplate={(option) => (
                       <div className="flex justify-start items-center">
                         <span className="mr-2">{option.icon}</span>
                         <span>{option.label}</span>
                       </div>
                     )}
                     valueTemplate={(option) => option ? <span className='text-lg'>{option.icon}</span> : <span className='text-lg'>Select Layout</span>}
               />
       </div>
   </div>
   {renderProducts()}
   </div>
</section>
  )
}

export default Recommended