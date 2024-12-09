import React, { useState, useEffect } from 'react';
import './Menu.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './Cart/CartContext'; // Import useCart hook
import Notification from './Cart/Notification';
import axios from 'axios';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the addToCart function from context
  const restaurantId = location.state?.restaurantId; // Get restaurantId from location's state
  console.log(restaurantId,"-------------------");

  const [menu, setMenu] = useState([]); // State to manage menu data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState('');
  const [isEditing, setIsEditing] = useState(null); // Track which menu item is being edited
  const [newItem, setNewItem] = useState({ name: '', imageUrl: '', price: '' });
  const [showAddMenuItemForm, setShowAddMenuItemForm] = useState(false);

  // Fetch menu items on component mount
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/restaurants/${restaurantId}/menu`);
        setMenu(response.data.menuItems);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching menu:', err);
        setError('Failed to load menu');
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setNotification(`Added ${item.name} to cart!`);
  };

  // Handle adding a new menu item
  const handleAddMenuItem = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/restaurants/${restaurantId}/menu`, newItem);
      setMenu([...menu, response.data.menuItem]); // Update state with the new menu item
      setShowAddMenuItemForm(false); // Hide form after submission
      setNewItem({ name: '', imageUrl: '', price: '' });
    } catch (err) {
      console.error('Error adding menu item:', err);
      setError('Failed to add menu item');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification('')} // Allow closing the notification
        />
      )}
      <div className="menu-list">
        {menu.map((item, index) => (
          <div key={index} className="menu-item">
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => {
                    const updatedMenu = [...menu];
                    updatedMenu[index].name = e.target.value;
                    setMenu(updatedMenu);
                  }}
                />
                <input
                  type="text"
                  value={item.imageUrl}
                  onChange={(e) => {
                    const updatedMenu = [...menu];
                    updatedMenu[index].imageUrl = e.target.value;
                    setMenu(updatedMenu);
                  }}
                />
                <input
                  type="text"
                  value={item.price}
                  onChange={(e) => {
                    const updatedMenu = [...menu];
                    updatedMenu[index].price = e.target.value;
                    setMenu(updatedMenu);
                  }}
                />
                <button onClick={() => setIsEditing(null)}>Save</button>
              </>
            ) : (
              <>
                <img className="menu-image" src={item.imageUrl} alt={item.name} />
                <h3 className="menu-name">{item.name}</h3>
                <p className="menu-price">{item.price}</p>
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                <button onClick={() => setIsEditing(index)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>

      <button onClick={() => setShowAddMenuItemForm(!showAddMenuItemForm)}>
        Add New Menu Item
      </button>

      {showAddMenuItemForm && (
        <div className="add-menu-item-form">
          <h3>Add New Menu Item</h3>
          <input
            type="text"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newItem.imageUrl}
            onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
          />
          <input
            type="text"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
          <button onClick={handleAddMenuItem}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
