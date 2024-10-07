import React from 'react';

const Menu = ({ menuData }) => {
  return (
    <div className="menu-list">
      {menuData.map((item, index) => (
        <div key={index} className="menu-item">
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
