import React from 'react';

// @ts-ignore
import { Navigate, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";

import {HomePage} from "./layouts/HomePage/HomePage";
import {Footer} from "./layouts/NavbarAndFooter/Footer";




function App() {
  return (
      <div className='d-flex flex-column min-vh-100'>
          <Navbar />
          <div className='flex-grow-1'>
              <Routes>
                  <Route path='/' element={<Navigate replace to="/home" />} />
                  <Route path='/home' element={<HomePage />} />

              </Routes>
          </div>
          <Footer />
      </div>
  );
}

export default App;
