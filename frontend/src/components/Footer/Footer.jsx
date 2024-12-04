// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="Tomato Logo" />
            <p>
        Tomato is your trusted partner in delivering fresh, delicious meals 
        right to your doorstep. Experience the convenience and taste with 
        every bite!
      </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="Facebook" />
                <img src={assets.twitter_icon} alt="Twitter" />
                <img src={assets.linkedin_icon} alt="LinkedIn" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
                <li>Careers</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 7709273762</li>
                <li>contact@tomato.com</li>
                <li>Support Center</li>
                <li>FAQs</li>
            </ul>
        </div>
      </div>
      
      <hr />
      <div className="footer-bottom">
    <p className="footer-copyright">
      Copyright 2024 © Tomato.com - All Right Reserved.
    </p>
    <p className="footer-credits">Made with ❤️ by Tomato Team</p>
  </div>
    </div>
  )
}

export default Footer
