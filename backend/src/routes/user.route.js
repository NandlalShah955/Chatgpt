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


// New signup request of the user 

app.post("/signup",async(req,res)=>{
    let {email,password}=req.body;
  let user=await Users.findOne({email});
  try {
        if(user){
            return res.status(400).send("Oops user already exists")
        }
        let newuser=new Users({
            email,
            password:await bcryptedpassword(password);
        })
        await newuser.save();
        return res.status(200).send(newuser);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});






module.exports =app;