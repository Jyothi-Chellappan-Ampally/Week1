const express = require('express'); 
const router = express.Router(); 
const authController = require('authc');
// Route for user registration 
router.post('/register', authController.register);
 // Route for user login 
 router.post('/login', authController.login); 
 module.exports = router;
