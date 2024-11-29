const Restaurant = require('../models/RestaurantSchema');

const getAllRestaurants = async (req, res) => {
    try {
      const restaurants = await Restaurant.find(); // Fetch all restaurants
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching restaurants', error });
    }
  };

// Add a new restaurant
const addRestaurant = async (req, res) => {
    const { name, description, imageUrl } = req.body; // Get restaurant data from request body
    try {
      const newRestaurant = new Restaurant({ name, description, imageUrl });
      await newRestaurant.save();
      res.status(201).json(newRestaurant); // Send back the created restaurant
    } catch (error) {
      res.status(500).json({ message: 'Error adding restaurant', error });
    }
  };


// Get a restaurant by ID
const getRestaurantById = async (req, res) => {
    const { id } = req.params; // Get restaurant ID from params
    try {
      const restaurant = await Restaurant.findById(id);
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching restaurant', error });
    }
  };

  module.exports = {getAllRestaurants, addRestaurant, getRestaurantById};