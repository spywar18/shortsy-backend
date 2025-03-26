require('dotenv').config()
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Make sure to log the URI to debug (remove in production)
    console.log("MongoDB URI:", process.env.MONGO_URI);
    
    // Check if MONGO_URI is defined
    if (!process.env.MONGO_URI) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }
    
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // other options as needed
    });
    
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;