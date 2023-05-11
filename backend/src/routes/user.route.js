const express=require("express");
const Users=require("../model/user.model");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const app=express.Router();

const bcryptedpassword=async(password)=>{
    return await bcrypt.hash(password,10)
}

app.get("/",async(req,res)=>{
  
    res.send("hello user");
})


// POST request of the user 

app.post("/signup",async(req,res)=>{
    let {email,password}
})






module.exports =app;