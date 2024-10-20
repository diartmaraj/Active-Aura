
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
import { FaChartPie,FaHome, FaBox, FaShoppingCart, FaUsers, FaChartBar, FaCogs, FaQuestionCircle } from 'react-icons/fa';
import { BiCategory } from "react-icons/bi";

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';



export const adminLinks = [
  { href: "/admin/dashboard", label: "Dashboard" , icon: <FaHome/> },
  { href: "/admin/products", label: "Products", icon: <FaBox/> },
  { href: "/admin/orders", label: "Orders", icon:  <FaShoppingCart/>},
  { href: "/admin/customers", label: "Customers", icon: <FaUsers/> },
  { href: "/admin/reports", label: "Reports", icon:  <FaChartBar/>},
  { href: "/admin/statistics", label: "Statistics", icon: <FaChartPie/> },
  { href: "/admin/categories", label: "Categories ", icon: <BiCategory/> }
];
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
 
];

export const products = [];
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
 
];

export const brands = [
  {name: "LR World", logo: LRWorld },
  {name: "Muscle Tech", logo: MuscleTech},
  {name: "Nature Made" , logo: NatureMade},
  {name: "Klean Athlete", logo: KleanAthlete},
  {name: "Gymshark" , logo: Gymshark }
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











