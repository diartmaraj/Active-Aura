
import LevroneGoldIso from "../assets/images/LevroneGoldIso.png"
import {
  faShieldHalved,
  faBrain,
  faGift,
  faSeedling,
  faComment,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Facebook from '../assets/icons/facebook.png';
import Google from '../assets/icons/google.png';
import Linkedin from "../assets/icons/linkedin.png";
import LRWorld from "../assets/icons/LRWorld.svg";
import MuscleTech from "../assets/images/MuscleTech.png";
import NatureMade from "../assets/images/NatureMade.png";
import KleanAthlete from "../assets/images/KleanAthlete.png";
import KleanAthleteMultivitamin from "../assets/images/KleanAthleteMultivitamin.png";
import Gymshark from "../assets/images/Gymshark.png"
import ListBox from "primereact/listbox";
import {Slider} from "primereact/slider";

import { startTransition, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { IoChevronUp, IoChevronDown, IoPricetagsOutline,IoTimeOutline  ,IoStarOutline, IoGiftOutline, IoColorPaletteOutline, IoResizeOutline, IoShirtOutline, IoStar, IoManOutline, IoStorefrontOutline } from 'react-icons/io5';
import { MdOutlineCategory } from "react-icons/md";

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';




export const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/shopByCategory", label: "Shop By Category" },
  { href: "/specialOffers", label: "Special offers" },
  { href: "/aboutUs", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
];
export const stats = [
  { value: "1000+", label: "Our Products" },
  { value: "100k+", label: "Sales" },
  { value: "4.6", label: "Ratings" },
];
export const recentProducts = [
  { img: `${BASE_URL}/uploads/images/VitaActive.png`, name: "Vita Active", category: "Nutrition", price: "27" },
  {
    img: `${BASE_URL}/uploads/images/FiguActiveSmoothCocoa.png`,
    name: "LR FIGUACTIVE Smooth Cocoa Shake",
    category: "Nutrition",
    price: "42",
  },
  {
    img: `${BASE_URL}/uploads/images/FaceMask.png`,
    name: "Aloe Vera Express Moisture Face Mask",
    category: "Skincare",
    price: "20",
  },
  {
    img: `${BASE_URL}/uploads/images/ProteinPower.png`,
    name: "Protein Power Drink Powder Vanilla",
    category: "Nutrition",
    price: "50",
  },
];

export const products = [
  {
    name: "LR FIGUACTIVE Almond Snack Bars",
    category: "Nutrition",
    img: `${BASE_URL}/uploads/images/ProteinPower.png`, // Replace with actual image path
    oldPrice: "35.29",
    price: "28.29",
    rating: 5,
    brand:"LR World",
    color:"",
    size:"",
    material:"",
    gender:"",
    availabile: "In Stock",
    discount: ""
  },
  {
    name: "LR FIGUACTIVE Lovely Coffee Shake",
    category: "Nutrition",
    img: `${BASE_URL}/uploads/images/VitaActive.png`, // Replace with actual image path
    oldPrice: "42",
    price: "33.59",
    rating:4,
    brand:"Muscle Tech",
    color:"",
    size:"",
    material:"",
    gender:"",
    availabile:"In Stock",
  discount: ""
  },
  {
    name: "LR FIGUACTIVE Crusty Raspberry Flakes",
    category: "Nutrition",
    img: `${BASE_URL}/uploads/images/FiguActiveSmoothCocoa.png`, // Replace with actual image path
    oldPrice: "42",
    price: "33.59",
    rating:2 ,
    brand:"LR World",
    color:"",
    size:"",
    material:"",
    gender:"",
    availabile:"",
    discount: ""
  },
  {
    name: "Aloe Vera Express Moisture Face Mask",
    category: "Skincare",
    img: `${BASE_URL}/uploads/images/FaceMask.png`,
    oldPrice: "20",
    price: "16",
    rating:5,
    brand:"",
    color:"",
    size:"",
    material:"",
    gender:"",
    availabile:"",
    discount: ""
  },
  {
    name: "Heavy Duty Lifter Stringer",
    category: "Apparel",
    img: `${BASE_URL}/uploads/images/HeavyDutyGymshark.png`,
    oldPrice: "36",
    price: "28",
    rating:5,
    brand:"Gymshark",
    color:"",
    size:"",
    material:"",
    gender:"",
    availabile:"",
    discount: "20"
  },
  // Add more products as needed
];

export const benefits = [
  {
    title: "Premium Quality Products",
    description:
      "We source only the highest quality health products from trusted and reputable brands.",
    icon: faShieldHalved,
  },
  {
    title: "Expert Selection",
    description:
      "We stay updated with the latest health trends and scientific advancements to bring you innovative solutions.",
    icon: faBrain,
  },
  {
    title: "Exclusive Offers and Rewards",
    description:
      "Enjoy special discounts, exclusive offers, and a rewarding loyalty program designed to give back to our valued clients.",
    icon: faGift,
  },
  {
    title: "Eco-Friendly and Sustainable",
    description:
      "Our commitment to the environment means we prioritize eco-friendly, sustainably sourced products.",
    icon: faSeedling,
  },
  {
    title: "Customer Satisfaction",
    description:
      "We source only the highest quality health products from trusted and reputable brands.",
    icon: faComment,
  },
  {
    title: "Convenient Shopping Experience",
    description:
      "Our user-friendly website ensures a seamless and enjoyable shopping experience.",
    icon: faShoppingCart,
  },
];

// Footer data structure for different sections
export const footerData = [
  {
    title: "Privacy",
    links: [
      { name: "Terms of use", url: "/terms-of-use" },
      { name: "Privacy policy", url: "/privacy-policy" },
      { name: "Cookies", url: "/cookies" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Shop", url: "/shop" },
      { name: "Order Ahead", url: "/order-ahead" },
      { name: "Menu", url: "/menu" },
    ],
  },
  {
    title: "About us",
    links: [
      { name: "Find a location", url: "/find-location" },
      { name: "Contact us", url: "/contact-us" },
      { name: "FAQs", url: "/faqs" },
    ],
  },
  {
    title: "Information",
    links: [
      { name: "Plans & pricing", url: "/plans-pricing" },
      { name: "Jobs", url: "/jobs" },
      { name: "Sell your product", url: "/sell-your-product" },
    ],
  },
  {
    title: "Social media",
    links: [
      {
        name: "Instagram",
        url: "https://www.instagram.com",
        icon: "faInstagram",
      },
      { name: "TikTok", url: "https://www.tiktok.com", icon: "faTiktok" },
      {
        name: "Facebook",
        url: "https://www.facebook.com",
        icon: "faFacebookF",
      },
      { name: "LinkedIn", url: "https://www.linkedin.com", icon: "faLinkedin" },
    ],
  },
];

export const specialOffers = [
  {name: "LR FIGUACTIVE Smooth Cocoa Shake",
    img: `${BASE_URL}/uploads/images/FiguActiveSmoothCocoa.png`,
    discount: "50%",
    btnTextColor: "text-[#866858]",
    bgGradient: "bg-gradient-to-br from-[#866858] to-[#906055]"
    
  },
  {
    name: "Levrone Gold Iso Whey",
    img: LevroneGoldIso,
    discount: "30%",
    btnTextColor: "text-[#60593d]",
    bgGradient: "bg-gradient-to-br from-[#60593d] to-[#ffffec]"
  },
  {
    name: "Heavy Duty Lifter Stringer",
    img: `${BASE_URL}/uploads/images/HeavyDutyGymshark.png`,
    discount: "20%",
    btnTextColor: "text-[#343436]",
    bgGradient: "bg-gradient-to-br from-[#f0f5f9] to-[#84b4f4]"
  }
];

export const brands = [
  {name: "LR World", logo: LRWorld },
  {name: "Muscle Tech", logo: MuscleTech},
  {name: "Nature Made" , logo: NatureMade},
  {name: "Klean Athlete", logo: KleanAthlete},
  {name: "Gymshark" , logo: Gymshark }
];

export const mostPopularProducts =[
  { img: LevroneGoldIso, name: "Levrone Gold Iso Whey", category: "Nutrition", price: "27" },
  {
    img: KleanAthleteMultivitamin,
    name: "Klean Athlete Multivitamin",
    category: "Nutrition",
    price: "42",
  },
  {
    img: `${BASE_URL}/uploads/images/FaceMask.png`,
    name: "Aloe Vera Express Moisture Face Mask",
    category: "Skincare",
    price: "20",
  },
  {
    img:`${BASE_URL}/uploads/images/ProteinPower.png`,
    name: "Protein Power Drink Powder Vanilla",
    category: "Nutrition",
    price: "50",
  },
  {
    img: `${BASE_URL}/uploads/images/HeavyDutyGymshark.png`,
    name: "Heavy Duty Lifter Stringer",
    category: "Apparel",
    price: "28",
  },


];

export const productType = [
  {name: "All"},
  {name: "Fitness", 
    subcategories: [
      {name: "Workout Equipment"},
      {name: "Apparel"},
      {name: "Nutrition"},
      {name: "Training Programs"},
      {name: "Recovery & Wellness"},
      {name: "Fitness Tech"},
      {name: "Outdoor Fitness"},
      {name: "Home Gym"},
      {name: "Fitness Goals"}
    ]
  },
  {name: "Beauty", 
    subcategories: [
      {name: "Skincare"},
      {name: "Haircare"},
      {name: "Fragrance"},
      {name: "Bath & Body"},
      {name: "Nail Care"},
      {name: "Tools & Accessories"},
      {name: "Men's Grooming"},
      {name: "Anti-Aging"},
      {name: "Makeup"}
    ]
  },
  {name: "Health", 
    subcategories: [
      {name: "Vitamins & Supplements"},
      {name: "Weight Management"},
      {name: "Personal Care"},
      {name: "Immune Support"},
      {name: "Digestive Health"},
      {name: "Mental Health"},
      {name: "Heart Health"},
      {name: "Joint & Bone Health"},
    ]
  }

]

// Extracting subcategory names
export const getSubcategoryTags = () => {
  const subcategoryTags = ["Shop All", "Best Sellers"];

  productType.forEach(category => {
    if (category.subcategories) {
      category.subcategories.forEach(subcategory => {
        subcategoryTags.push(subcategory.name);
      });
    }
  });

  return subcategoryTags;
};


export const ratings = [
  {
    value: 5,
    stars: (
      <>
        <IoStar size={20} color="gold" />
        <IoStar size={20} color="gold" />
        <IoStar size={20} color="gold" />
        <IoStar size={20} color="gold" />
        <IoStar size={20} color="gold" />
      </>
    ),
  },
  {
    value: 4,
    stars: (
      <>
        <IoStar size={20} color="gold" />
        <IoStar size={20} color="gold" />
        <IoStar size={20} color="gold" />
        <IoStar size={20} color="gold" />
        <IoStarOutline size={20} color="gold" />
      </>
    ),
  },
  {
    value: 3,
    stars: (
      <>
        <IoStar size={20} color="gold" />
        <IoStar size={20} color="gold" />
        <IoStar size={20} color="gold" />
        <IoStarOutline size={20} color="gold" />
        <IoStarOutline size={20} color="gold" />
      </>
    ),
  },
  {
    value: 2,
    stars: (
      <>
        <IoStar size={20} color="gold" />
        <IoStar size={20} color="gold" />
        <IoStarOutline size={20} color="gold" />
        <IoStarOutline size={20} color="gold" />
        <IoStarOutline size={20} color="gold" />
      </>
    ),
  },
  {
    value: 1,
    stars: (
      <>
        <IoStar size={20} color="gold" />
        <IoStarOutline size={20} color="gold" />
        <IoStarOutline size={20} color="gold" />
        <IoStarOutline size={20} color="gold" />
        <IoStarOutline size={20} color="gold" />
      </>
    ),
  },
];

export const discounts = [
  { label: "10% or more", value: "10" },
  { label: "20% or more", value: "20" },
  { label: "30% or more", value: "30" },
  { label: "40% or more", value: "40" },
  { label: "50% or more", value: "50" },
  { label: "Buy 1 Get 1 Free", value: "bogo" },
  { label: "Clearance", value: "clearance" }
];

export const colors = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Green', hex: '#008000' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'Gray', hex: '#808080' }
];

export const sizes = [
  { name: 'XS', label: 'Extra Small' },
  { name: 'S', label: 'Small' },
  { name: 'M', label: 'Medium' },
  { name: 'L', label: 'Large' },
  { name: 'XL', label: 'Extra Large' },
  { name: 'XXL', label: 'Double Extra Large' },
  { name: 'XXXL', label: 'Triple Extra Large' }
];

export const materials =[
  { name: "Cotton"},
  { name: "Polyester"},
  { name: "Wool"},
  { name: "Silk"},
  { name: "Leather"},
  { name: "Denim"},
  { name: "Nylon"},
  { name: "Spandex"},
  { name: "Polypropylene"},
  { name: "Bamboo"},
  { name: "Mesh Fabric"},
]

export const availability = [
  { name: "In Stock"},
  { name: "Out of Stock"},
  { name: "Pre Order"},
  { name: "Back Order"},
  { name: "Limited Stock"},
  { name: "Available for Pickup"},
  { name: "Online Only"}
]




export const filters = ( openSections, toggleSection, handleFilters) => {

  const {
    handleCategoryChange,
   handleBrandChange ,
   handleRatingChange,
   handleDiscountChange
 
  } = handleFilters;


  return(
[
  { name: "Category", icon: <MdOutlineCategory />,
    content: (<div className="flex flex-col justify-content-center">
      {productType.map((category, index) => (
        <div key={index} className="flex flex-col w-full">
          <div
            className="flex justify-between items-center w-full  cursor-pointer border-b-2 py-2 "
            onClick={() => toggleSection(category.name)}
          >
            <div className="flex justify-center items-center">
              <label className="flex items-center text-sm font-medium text-gray-700 ">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 mr-2"
                  onChange={(e) => handleCategoryChange(category.name, e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">{category.name}</span>
              </label>
            </div>
            {openSections[category.name] ? (
              <IoChevronUp size={16} className='text-black' />
            ) : (
              <IoChevronDown size={16}  className='text-black'/>
            )}
          </div>
          {openSections[category.name] && category.subcategories && (
            <div className="flex flex-col mt-2 pl-4 w-full">
              {category.subcategories.map((subcategory, subIndex) => (
                <label key={subIndex} className="inline-flex items-center mt-1">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
                    onChange={(e) => handleCategoryChange(subcategory.name,  e.target.checked)}
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
      <div className="card flex justify-center ">
        <Slider 
         
          range 
        />
      </div>
    )
  },
  {
    name: "Brands",
    icon: <IoStorefrontOutline size={20} />,
    content: (
      <div className=" flex flex-col justify-content-center">  
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-row items-center">
            <label key={index} className="inline-flex items-center mt-1">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" 
            onChange={(e) => handleBrandChange(brand.name,  e.target.checked)}
       />
              <span className="ml-2 text-sm text-gray-700">{brand.name}</span>
            </label>
          </div>
        ))}
      </div>
    )
  },
  { name: "Ratings", icon: <IoStarOutline size={20} /> ,
  content: (
  <div className=" flex flex-col justify-content-center">  
    {ratings.map((rating, index) => (
      <div key={index} className="flex flex-row items-center">
        <label key={index} className="inline-flex items-center mt-1">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
        onChange={(e) => handleRatingChange(rating.value, e.target.checked)}
     />
          <span className="ml-2 flex flex-row text-sm text-gray-700">{rating.stars}</span>
        </label>
      </div>
    ))}
  </div>

  )},
  { name: "Discount Offers", icon: <IoGiftOutline size={20} />,
    content: (
      <div className=" flex flex-col justify-content-center">  
    {discounts.map((discount, index) => (
      <div key={index} className="flex flex-row items-center">
        <label key={index} className="inline-flex items-center mt-1">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" 
        onChange={(e) => handleDiscountChange(discount.label, e.target.checked)}
        />
          <span className="ml-2 flex flex-row text-sm text-gray-700">{discount.label}</span>
        </label>
      </div>
    ))}
  </div>
    )
   },
  { name: "Color", icon: <IoColorPaletteOutline size={20} />,
    content: (
      <div className=" flex flex-col justify-content-center">  
    {colors.map((color, index) => (
      <div key={index} className="flex flex-row items-center">
        <label key={index} className="inline-flex items-center mt-1">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" 
     
     />
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
  { name: "Size", icon: <IoResizeOutline size={20} /> ,
    content: (
      <div className=" flex flex-col justify-content-center">  
    {sizes.map((size, index) => (
      <div key={index} className="flex flex-row items-center">
        <label key={index} className="inline-flex items-center mt-1">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
    
       />
          <span className="ml-2 flex flex-row text-sm text-gray-700 mr-2">{size.name}</span>
        </label>
      </div>
    ))}
  </div>
    )
  },
  { name: "Material", icon: <IoShirtOutline size={20} /> ,
    content: (
      <div className=" flex flex-col justify-content-center">  
      {materials.map((material, index) => (
        <div key={index} className="flex flex-row items-center">
          <label key={index} className="inline-flex items-center mt-1">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" 
       
        />
            <span className="ml-2 flex flex-row text-sm text-gray-700 mr-2">{material.name}</span>
          </label>
        </div>
      ))}
    </div>
    )
},
  { name: "Gender", icon: <IoManOutline size={20} /> ,
    content: (
      <div className=" flex flex-col justify-content-center">  
        <div  className="flex flex-row items-center">
          <label className="inline-flex items-center mt-1">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300" 
       />
            <span className="ml-2 flex flex-row text-sm text-gray-700 mr-2">Male</span>
          </label>
        </div>
        <div  className="flex flex-row items-center">
          <label  className="inline-flex items-center mt-1">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
          />
            <span className="ml-2 flex flex-row text-sm text-gray-700 mr-2">Female</span>
          </label>
        </div>
    </div>
    )
},
  { name: "Product Availability", icon: <IoTimeOutline size={20} />,
    content: (
      <div className=" flex flex-col justify-content-center">  
      {availability.map((available, index) => (
        <div key={index} className="flex flex-row items-center">
          <label key={index} className="inline-flex items-center mt-1">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
           />
            <span className="ml-2 flex flex-row text-sm text-gray-700 mr-2">{available.name}</span>
          </label>
        </div>
      ))}
    </div>
    )
 }
]
  )
}







