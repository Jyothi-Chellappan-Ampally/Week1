const express = require('express'); 
const router = express.Router(); 
// const userController = require('Userc'); 
// const authController = require('Authc'); 
// const userroute=require('Userr');
// const authroute = require('Authr');
const app=express();
app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true 

}))
app.use();
app.use("/user",userroute);
app.use("/pets",authroute);
app.listen(3000,()=>console.log("Server is running"));

// router.post('/register', authController.register);
//  router.post('/login', authController.login); 
//  //const userController = require('userc'); 

//  router.get('/', userController.getAllUsers); 

//  router.get('/:id', userController.getUserById);

//   router.put('/:id', userController.updateUserById); 

//   router.delete('/:id', userController.deleteUserById); 
//   module.exports = router;
 