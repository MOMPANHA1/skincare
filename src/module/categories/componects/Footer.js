import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <h3>SKINCARE STORE</h3>
      <p>Copyright © 2023 Your Website. All rights reserved.</p>
      <ul className='footer-nav'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <div className='social-media'>
        <span><i><FaFacebook /></i> </span>
        <span><i><FaTelegram /></i> </span> 
        <span><i><FaTwitter /></i> </span> 
      </div>
      <p>Powered by <a href='#'>PANHA.</a></p>
      <div className='payment-methods'>

      </div>
    </div>
  )
}

export default Footer