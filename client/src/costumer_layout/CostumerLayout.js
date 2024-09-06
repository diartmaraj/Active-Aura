import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Login from './pages/Login-Signup/Login';
import Signup from './pages/Login-Signup/Signup';
import ShopRouter from './pages/Shop/ShopRouter';
import AccountSettings from './components/profile/AccountSettings';

function CostumerLayout() {
  return  (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<ShopRouter/>}/>
      <Route path="/settings/*" element={<AccountSettings/>}/>
    </Routes>
    </div>
  );
}

export default CostumerLayout;
