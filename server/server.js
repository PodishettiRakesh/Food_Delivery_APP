const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
// const bodyParser = require('body-parser');




const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
connectDB();


const app = express();
app.use(express.json());
const PORT = 5000;


app.get('/', (req, res)=>{
    res.send("Rakesh server running succesfully");
})
// console.log(userRoutes);
app.use('/api/users', userRoutes);
app.use('/restaurants', restaurantRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));