const express=require("express");
const Users=require("../model/user.model");
const app=express.Router();

app.get("/",async(req,res)=>{
  
    res.send("hello user");
})