import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Login from './pages/Login-Signup/Login';
import Signup from './pages/Login-Signup/Signup';
import ShopRouter from './pages/Shop/ShopRouter';
import AccountSettings from './components/profile/AccountSettings';
import EmailVerificationPage from './pages/Login-Signup/EmailVerificationPage';
import ResendVerifyEmail from './pages/Login-Signup/ResendVerifyEmail';

function CostumerLayout() {
  return  (
    <div className=''>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-email" element={<EmailVerificationPage />} />
      <Route path="/send-verifification-email" element={<ResendVerifyEmail />} />
      <Route path="/*" element={<ShopRouter/>}/>
      <Route path="/settings/*" element={<AccountSettings/>}/>
    </Routes>
    </div>
  );
}

export default CostumerLayout;
