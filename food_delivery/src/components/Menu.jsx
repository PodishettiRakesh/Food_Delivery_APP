import React from 'react';
import './Menu.css'
import Cart from './Cart/Cart';

const cartItems=[
  { name: 'Chicken Biryani', price: '$12.99' },
  { name: 'Paneer Biryani', price: '$10.99' },
  { name: 'Mutton Biryani', price: '$14.99' }
];


const Menu = ({ menuData }) => {
  return (
    <div className="menu-list">
      {menuData.map((item, index) => (
        <div key={index} className="menu-item">
          {console.log(index)}
          <img
            className="menu-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <h3 className="menu-name">{item.name}</h3>
          <p className="menu-price">{item.price}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>


        
      ))}
    </div>
  );
};

export default Menu;
