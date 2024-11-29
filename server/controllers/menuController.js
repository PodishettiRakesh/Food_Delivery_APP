const Restaurant = require('../models/RestaurantSchema');
const Menu = require('../models/MenuSchema');


// Add a menu to a specific restaurant
const addMenuToRestaurant = async (req, res) => {
    try {
      const { restaurantId } = req.params;
      const { name, imageUrl, price } = req.body;
  
      // Create a new menu item
      const menuItem = new Menu({ name, imageUrl, price, restaurant: restaurantId });
  
      // Save the menu item
      await menuItem.save();
  
      // Send response
      res.status(201).json({
        message: 'Menu item added successfully',
        menuItem,
      });
    } catch (error) {
      console.error('Error adding menu item:', error);
      res.status(500).json({ error: 'Failed to add menu item' });
    }
  };


module.exports = {addMenuToRestaurant};