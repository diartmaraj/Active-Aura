import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import MainShop from './views/MainShop';

const ShopRouter = () => {


  

  return (
    <div>
      <Routes>
        <Route path="/shop/*" element={<MainShop />}/>
      </Routes>
    </div>
  );
};

export default ShopRouter;
