const Restaurant = require('../models/RestaurantSchema');
const Menu = require('../models/MenuSchema');


// Add a menu to a specific restaurant
const addMenuToRestaurant = async (req, res) => {
    try {
      const { restaurantId } = req.params;
    //   console.log("----------------------");
    //   console.log(restaurantId);
    //   console.log("----------------------")
      const { name, imageUrl, price } = req.body;
      
  
      // Create a new menu item
      const menuItem = new Menu({name, imageUrl, price, restaurantId: restaurantId});
    //   console.log(menuItem,"**************");
  
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



// Get the menu of a specific restaurant
const getMenuByRestaurantId = async (req, res) => {
    try {
        const { restaurantId } = req.params; // Get restaurantId from the URL
        
        // Check if the restaurant exists
        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        
        // Fetch all menu items for the specific restaurant
        const menuItems = await Menu.find({ restaurantId });
        
        // Check if menu items exist for the restaurant
        if (menuItems.length === 0) {
            return res.status(404).json({ message: 'No menu items found for this restaurant' });
        }
        
        // Return the list of menu items
        res.status(200).json({ menuItems });
    } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).json({ error: 'Failed to fetch menu items' });
    }
};



module.exports = {addMenuToRestaurant, getMenuByRestaurantId};