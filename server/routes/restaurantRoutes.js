const express = require('express');
const router = express.Router();
const {getAllRestaurants, addRestaurant} = require('../controllers/restaurantController');

// Route to fetch all restaurants
router.get('/', getAllRestaurants);

// Route to add a new restaurant
router.post('/', addRestaurant);

module.exports = router;
