const mongoose = require('mongoose'); 
// Define the profile schema 
const petprofileSchema = new mongoose.Schema({ 
  //  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true }, 
    name: {type: String, maxLength: 300 },
    breed: { type: String, maxLength: 300 }, 
    age: { type: Number, required: true }, 
    gender: { type: String, required: true }, 
    dateofbirth: { type: Date }, 
    dateofvaccination: { type: Date }});
    // Add more fields as needed 
    // Create the Profile model 
    const PetProfile = mongoose.model('PetProfile', petprofileSchema);
    module.exports = PetProfile;
