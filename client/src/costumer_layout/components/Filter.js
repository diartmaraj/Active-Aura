import React, { useState, useEffect, useMemo } from 'react';
import { IoClose, IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { filters } from '../../constants';
import { FaTimes } from 'react-icons/fa';
import { IoFilter } from "react-icons/io5";
import Button1 from './buttons/Button1';



const Filter = ({ isOpen, handleToggleFilter, handleFilters}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [openSections, setOpenSections] = useState({});
   

   const {
    handleApplyFilters,
    handleResetFilters
   } = handleFilters;

   

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

    const renderFilter = () => {
        const layout = getLayout(); // Call getLayout to get the layout value
        const filterList = filters( openSections, toggleSection, handleFilters);
        
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
                                {filterList.map((filter, index) => (
                                    <div key={index} className="flex flex-col items-start padding-x w-full">
                                        <div className='flex justify-between items-center cursor-pointer gap-4 w-full border-b-2 pb-2' onClick={() => toggleSection(filter.name)}>
                                        <div className='flex justify-center items-center gap-4'>
                                            {filter.icon}
                                            <label className='block text-sm font-medium text-gray-700'>{filter.name}</label>
                                            </div>
                                            {openSections[filter.name] ? (
                                                <IoChevronUp size={16} className='text-black'/>
                                            ) : (
                                                <IoChevronDown size={16} className='text-black'/>
                                            )}
                                        </div>
                                        {openSections[filter.name] && (
                                            <div className='flex flex-col mt-2 pl-2  w-full'>
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
                                {filterList.map((filter, index) => (
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
                                {filterList.map((filter, index) => (
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
                                {filterList.map((filter, index) => (
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
                            
                                {filterList.map((filter, index) => (
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
