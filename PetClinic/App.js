const express = require('express'); 
const app=express();
const router = express.Router(); 
const userController = require('userc'); 
const authController = require('authc'); 
app.use();
router.post('/register', authController.register);
 router.post('/login', authController.login); 
 //const userController = require('userc'); 
 router.get('/', userController.getAllUsers); 
 router.get('/:id', userController.getUserById);
  router.put('/:id', userController.updateUserById); 
  router.delete('/:id', userController.deleteUserById); 
  module.exports = router;
 