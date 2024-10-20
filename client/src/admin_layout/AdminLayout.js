import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProducts from './pages/products/AddProducts';
import Products from './pages/products/Products';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Management from './pages/management/Management';


function AdminLayout() {
  return  (
  
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
    {/* Sidebar */}
    <div className="w-full  sm:w-1/4 lg:w-1/6">
      <SideBar />
    </div>

    <div className="flex-grow flex flex-col">
      {/* Navbar */}
      <div className="bg-white shadow-lg lg:rounded-tr-xl p-4">
        <NavBar />
      </div>

      <div className=''>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products/>}/> 
          <Route path="/products/add-products" element={<AddProducts/>} />
          <Route path="/categories" element={<Management/>}/>
        </Routes>
    </div>
    </div>
  </div>
  );
}

export default AdminLayout;
