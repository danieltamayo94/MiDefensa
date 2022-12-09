import './App.css';
import ButtonWhatsapp from './components/ButtonWhatsapp';

import Index from './components/index/Index';
import React from 'react'
import Menu from './components/Menu';
import OurServices from './components/services/OurServices';
import {BrowserRouter as Router, Route, Link, NavLink , Routes, useLocation } from "react-router-dom";
import Navbar from './components/Navbar'




function App() {

  
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/servicios' element={<OurServices/>}/>
        </Routes>
        <ButtonWhatsapp/>
      </Router>
    </div>
  );
}

export default App;
