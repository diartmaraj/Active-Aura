/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route,Routes, Switch, Navigate  } from "react-router-dom";

// core components
import Admin from "./layouts/Admin.js";




const AdminLayout = () => {
  return (
   <div className=''>
   <Routes>
      <Route path="/*" element={<Admin />} />
    </Routes>
   </div>

  )
}

export default AdminLayout



