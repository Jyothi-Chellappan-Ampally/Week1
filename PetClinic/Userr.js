const express = require('express'); 
const router = express.Router(); 
const userController = require('userc'); 
// Route to get all users 
router.get('/', userController.getAllUsers); 
// Route to get user by ID 
router.get('/:id', userController.getUserById);
 // Route to update user by ID 
 router.put('/:id', userController.updateUserById); 
 // Route to delete user by ID 
 router.delete('/:id', userController.deleteUserById); 
 module.exports = router;
