const express =require('express');
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Hello Welcome User!! Here is the Contact Details")
})
module.exports=router;