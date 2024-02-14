import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Login from "./Login";
import Home from "./Home";
import Corders from "./Corders";
import UpdateProduct from './UpdateProduct';
import Userlist from "./Userlist";

export default function Routepages() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Update" element={<UpdateProduct />} />
        <Route path="/Userlist" element={<Userlist />} />
      </Routes>
    </Router>
  );
}