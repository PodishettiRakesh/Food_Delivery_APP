const mongoose = require('mongoose');
// const { Schema } = mongoose;

// Menu Schema
const MenuSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }, // Links to Restaurant
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: String, required: true },
});

const Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu;
