const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const userRoutes=require('./routes/userRoutes');

connectDB();


const app = express();
const PORT = 5000;


app.get('/', (req, res)=>{
    res.send("server running succesfully");
})

app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));