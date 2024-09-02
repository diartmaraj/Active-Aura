import { FaChartPie,FaHome, FaBox, FaShoppingCart, FaUsers, FaChartBar, FaCogs, FaQuestionCircle } from 'react-icons/fa';
export const adminLinks = [
    { href: "/dashboard", label: "Dashboard" , icon: <FaHome/> },
    { href: "/products", label: "Products", icon: <FaBox/> },
    { href: "/orders", label: "Orders", icon:  <FaShoppingCart/>},
    { href: "/customers", label: "Customers", icon: <FaUsers/> },
    { href: "/reports", label: "Reports", icon:  <FaChartBar/>},
    { href: "/statistics", label: "Statistics", icon: <FaChartPie/> },
  ];
  