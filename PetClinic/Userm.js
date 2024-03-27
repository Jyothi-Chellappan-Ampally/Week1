const mongoose = require('mongoose'); 
// Define the user schema 
const userSchema = new mongoose.Schema({ 
    username: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true }, 
    fullName: { type: String, required: true }, 
    gender: { type: String, enum: ['male', 'female', 'other'], required: true }, 
    dateOfBirth: { type: Date, required: true }, 
    
    // Add more fields as needed 
    createdAt: { type: Date, default: Date.now } }); 
    
    // Create the User model 
    const User = mongoose.model('User', userSchema); 
    module.exports = User;
