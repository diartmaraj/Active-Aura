import { IoStar, IoStarOutline } from "react-icons/io5";

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
  