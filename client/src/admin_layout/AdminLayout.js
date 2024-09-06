import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProducts from './pages/products/AddProducts';
import Products from './pages/products/Products';



function AdminLayout() {
  return  (
    <div className=''>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products/>}/> 
    </Routes>
    </div>
  );
}

export default AdminLayout;
