import React, { useState } from 'react';
import { useCart } from './CartContext'; // Import useCart hook
import './Cart.css'
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Get cartItems from context
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
              <button 
                className="remove-button"
                onClick={() => removeFromCart(item)} // Remove item from cart
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Add a button to proceed to checkout */}
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;