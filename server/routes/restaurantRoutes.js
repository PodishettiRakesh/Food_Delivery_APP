const express = require('express');
const router = express.Router();
const {getAllRestaurants, addRestaurant, getRestaurantById} = require('../controllers/restaurantController');

// Route to fetch all restaurants
router.get('/', getAllRestaurants);

// Route to add a new restaurant
router.post('/', addRestaurant);

// Route to fetch a restaurant by ID
router.get('/:id', getRestaurantById);

module.exports = router;
