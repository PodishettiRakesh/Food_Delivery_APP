const Restaurant = require('../models/RestaurantSchema');

const getAllRestaurants = async (req, res) => {
    try {
      const restaurants = await Restaurant.find(); // Fetch all restaurants
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching restaurants', error });
    }
  };

  module.exports = {getAllRestaurants};