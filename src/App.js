import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Login from "./pages/Login-Signup/Login";
import Signup from "./pages/Login-Signup/Signup";
import Shop from "./pages/Shop/Shop";

function App() {
  return  (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shop" element={<Shop/>}/>
    </Routes>
  </Router>
  );
}

export default App;
