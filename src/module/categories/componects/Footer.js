import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <h3>SKINCARE STORE</h3>
      <p>Copyright © 2023 Your Website. All rights reserved.</p>
      <ul className='footer-nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <div className='social-media'>
        <span><i><FaFacebook /></i> </span>
        <span><i><FaTelegram /></i> </span> 
        <span><i><FaTwitter /></i> </span> 
      </div>
      <p>Powered by <Link to='/'>PANHA.</Link></p>
      <div className='payment-methods'>

      </div>
    </div>
  )
}

export default Footer