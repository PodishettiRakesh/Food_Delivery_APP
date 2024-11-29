const express = require('express');
const router = express.Router();
const {addRestaurant} = require('../controllers/restaurantController');

// Route to fetch all restaurants

// Route to add a new restaurant
router.post('/', addRestaurant);

module.exports = router;
