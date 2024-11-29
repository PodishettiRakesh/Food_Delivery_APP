const express = require('express');
const router = express.Router();
// const {addMenuToRestaurant,getMenuByRestaurantId} = require('../controllers/menuController');

// Route to add a menu to a specific restaurant
router.post('/:restaurantId/menu', addMenuToRestaurant);

// Route to get the menu of a specific restaurant
router.get('/:restaurantId/menu', getMenuByRestaurantId);

module.exports = router;
