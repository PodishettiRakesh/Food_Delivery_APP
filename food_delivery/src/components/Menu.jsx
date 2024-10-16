import React,{useState} from 'react';
import './Menu.css'
// import { useLocation } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './Cart/CartContext'; // Import useCart hook
import Notification from './Cart/Notification';


const Menu = () => {
  const location = useLocation();
  const { menuData } = location.state; // Get menuData from location's state
  const { addToCart } = useCart(); // Use the addToCart function from context
  const [notification, setNotification] = useState('');
  const [menu, setMenu] = useState(menuData); // State to manage menu data
  const [isEditing, setIsEditing] = useState(null); // Track which menu item is being edited
  const [newItem, setNewItem] = useState({ name: '', imageUrl: '', price: '' });

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    addToCart(item);
    
    setNotification(`Added ${item.name} to cart!`);
  };

  return (
    <div>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification('')} // Allow closing the notification
        />
      )}
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
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(item)} // Add item to cart
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Menu;
