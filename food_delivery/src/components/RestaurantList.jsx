import React, { useState, useEffect } from 'react';
import './RestaurantList.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddRestaurantForm, setShowAddRestaurantForm] = useState(false);
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    description: '',
    imageUrl: '',
  });

  const navigate = useNavigate();

  // Fetch all restaurants on component mount
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/restaurants');
        setRestaurants(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching restaurants:', err);
        setError('Error fetching restaurants');
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Handle viewing a restaurant's menu
  const handleViewMenu = (restaurant) => {
    navigate('/menu', { state: { restaurantId: restaurant._id, menuData: restaurant.menu } });

  };

  // Handle adding a new restaurant
  const handleAddRestaurant = async () => {
    try {
      const response = await axios.post('http://localhost:5000/restaurants', newRestaurant);
      setRestaurants([...restaurants, response.data]); // Update state with the newly added restaurant
      setShowAddRestaurantForm(false);
      setNewRestaurant({ name: '', description: '', imageUrl: '' });
    } catch (err) {
      console.error('Error adding restaurant:', err);
      setError('Error adding restaurant');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant, index) => (
        <div key={index} className="restaurant-card">
          <img className="restaurant-image" src={restaurant.imageUrl} alt={restaurant.name} />
          <h2 className="restaurant-name">{restaurant.name}</h2>
          <p className="restaurant-description">{restaurant.description}</p>
          <button onClick={() => handleViewMenu(restaurant)}>View Menu</button>
        </div>
      ))}

      <button onClick={() => setShowAddRestaurantForm(!showAddRestaurantForm)}>
        Add New Restaurant
      </button>

      {showAddRestaurantForm && (
        <div className="add-restaurant-form">
          <h3>Add New Restaurant</h3>
          <input
            type="text"
            placeholder="Restaurant Name"
            value={newRestaurant.name}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newRestaurant.description}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newRestaurant.imageUrl}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, imageUrl: e.target.value })}
          />
          <button onClick={handleAddRestaurant}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
