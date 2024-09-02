import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function AdminLayout() {
  return  (
    <div className=''>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
    </div>
  );
}

export default AdminLayout;
