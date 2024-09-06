
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CostumerLayout from './costumer_layout/CostumerLayout';
import AdminLayout from './admin_layout/AdminLayout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initializeAuthState } from './store/features/auth/authSlice';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuthState());
  }, [dispatch]);
  return  (
  <Router>
    <Routes>
      <Route path="/*" element={<CostumerLayout />} />
      <Route path="/admin/*" element={<AdminLayout/>}/>
    </Routes>
  </Router>
  );
}

export default App;
