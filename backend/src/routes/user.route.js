const express=require("express");
const UserModel=require("../model/user.model");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const app=express.Router();

const bcryptedpassword=async(password)=>{
    return await bcrypt.hash(password,10)
}

app.get("/",async(req,res)=>{
  
    // let user=await UserModel.find();
    res.send('user');
   
})



// New signup request of the user 

app.post("/signup",async(req,res)=>{
    let {name,lastname,email,password}=req.body;
  let user=await UserModel.findOne({email});
  try {
        if(user){
            return res.status(400).send("Oops user already exists")
        }
        let newuser=new UserModel({
            name,
            lastname,
            email,
            password:await bcryptedpassword(password)
        })
        await newuser.save();
        return res.status(200).send(newuser);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


// // Already Existing user login api 

app.post("/login",async(req,res)=>{
    const {email, password} = req.body;
  try {
    const user=await UserModel.findOne({email});
    bcrypt.compare(password,user.password,function(error,answer){
        if(answer){
            const temp=jwt.sign({user},"SECRET_KEY");
            return res.send({user,temp});
        }else{
            return res.send("oops Wrong password or email")
        }
    })
  } catch (error) {
    return res.send(error.message)
  }


})

module.exports =app;