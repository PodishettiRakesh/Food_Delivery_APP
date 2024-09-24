import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
    <h1>Food Delivery</h1>
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Cart</li>
        </ul>
    </nav>
    </header>
  )
}

export default Header
