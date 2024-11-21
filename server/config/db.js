const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongodb is connected');
    } catch (error){
        console.error('Mongodb connection error:', error.message);
        process.exit(1);
    }
    
};

module.exports = connectDB;