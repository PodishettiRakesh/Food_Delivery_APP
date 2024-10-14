import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Food Delivery</h1>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cart" activeClassName="active-link">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
