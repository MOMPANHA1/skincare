import React from 'react'
import "../src/assets/css/All.css"
import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";
import Layout from './module/categories/componects/Layout';
import Deshboard from './module/categories/componects/Deshboard';
import Blog from './module/categories/componects/Blog';
import Shop from './module/categories/componects/Shop';
import Contact from './module/categories/componects/Contact';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element= {<Deshboard/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/contact'element={<Contact/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App