const express=require("express");
const Users=require("../model/user.model");
// const jwt=require("jsonwebtoken");
// const bcrypt=require("bcrypt");
const app=express.Router();

// const bcryptedpassword=async(password)=>{
//     return await bcrypt.hash(password,10)
// }

app.get("/",async(req,res)=>{
  
    let user=await Users.find();
    res.send(user);
    // res.send('user');
})
// app.get("/rule",async(req,res)=>{
  
//     // let user=await User.find()
//     // res.send(user);
//     res.send('rule');
// })


// New signup request of the user 

// app.post("/signup",async(req,res)=>{
//     let {name,email,password}=req.body;
//   let user=await Users.findOne({email});
//   try {
//         if(user){
//             return res.status(400).send("Oops user already exists")
//         }
//         let newuser=new Users({
//            name,
//             email,
//             password:await bcryptedpassword(password)
//         })
//         await newuser.save();
//         return res.status(200).send(newuser);
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// });


// // Already Existing user login api 

// app.post("/login",async(req,res)=>{
//     const {email, password} = req.body;
//   try {
//     const user=await Users.findOne({email});
//     bcrypt.compare(password,user.password,function(error,answer){
//         if(answer){
//             const final=jwt.sign({user},"SECRET_KEY");
//             return res.send({user,temp});
//         }else{
//             return res.send("oops Wrong password or email")
//         }
//     })
//   } catch (error) {
//     return res.send(error.message)
//   }


// })





module.exports =app;