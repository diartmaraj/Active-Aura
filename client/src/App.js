
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CostumerLayout from './costumer_layout/CostumerLayout';
import AdminLayout from './admin_layout/AdminLayout';


function App() {
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
