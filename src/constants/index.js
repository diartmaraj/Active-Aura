import FiguActiveSmoothCocoa from "../assets/images/FiguActiveSmoothCocoa.png";
import VitaActive from "../assets/images/VitaActive.png";
import FaceMask from "../assets/images/FaceMask.png";
import ProteinPower from "../assets/images/ProteinPower.png";
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
  { img: VitaActive, name: "Vita Active", category: "Nutrition", price: "27" },
  {
    img: FiguActiveSmoothCocoa,
    name: "LR FIGUACTIVE Smooth Cocoa Shake",
    category: "Supplement",
    price: "42",
  },
  {
    img: FaceMask,
    name: "Aloe Vera Express Moisture Face Mask",
    category: "Care",
    price: "20",
  },
  {
    img: ProteinPower,
    name: "Protein Power Drink Powder Vanilla",
    category: "Supplement",
    price: "50",
  },
];

export const categories = [
  { name: "Supplements" },
  { name: "Care" },
  { name: "Nutrition" },
];

export const products = [
  {
    name: "LR FIGUACTIVE Almond Snack Bars",
    category: "Supplements",
    image: ProteinPower, // Replace with actual image path
    oldPrice: "35.29",
    price: "28.29",
  },
  {
    name: "LR FIGUACTIVE Lovely Coffee Shake",
    category: "Supplements",
    image: VitaActive, // Replace with actual image path
    oldPrice: "42",
    price: "33.59",
  },
  {
    name: "LR FIGUACTIVE Crusty Raspberry Flakes",
    category: "Supplements",
    image: FiguActiveSmoothCocoa, // Replace with actual image path
    oldPrice: "42",
    price: "33.59",
  },
  {
    name: "Aloe Vera Express Moisture Face Mask",
    category: "Care",
    image: FaceMask,
    oldPrice: "20",
    price: "16",
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
    img: FiguActiveSmoothCocoa,
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
  }
];





