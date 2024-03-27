//import express from 'express';
const express=require('express');
const app =express();
const PORT=3000;
const userr=require('./routes/User');
const contactr = require('./routes/Contact');
app.use("/user",userr);
app.use("/contact",contactr);
app.listen(PORT,()=>{
    console.log("Server started");
})

