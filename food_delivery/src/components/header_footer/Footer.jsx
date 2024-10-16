import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <nav>
        <ul className='footer-list'>
          <li className='footer-item'><NavLink to="/contact-us">Contact Us</NavLink></li>
          <li className='footer-item'><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
          <li className='footer-item'><NavLink to="/terms-of-service">Terms of Service</NavLink></li>
        </ul>
      </nav>
      <p className='footer-text'>@ 2024 Food Delivery App. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
