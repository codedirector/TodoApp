const user=require("../models/Users");
const express=require("express");
const JWT=require("jsonwebtoken");

const router = express.Router();
const SECRET_KEY="mysecretkey";

router.post("/signup",async(req,res)=>{
  const {name,email,password}=req.body;
  try{
    const check=await user.findOne({email});
    if(check)
         res.status(400).send("email already registered");
        const newuser= new user({name,email,password});
       await newuser.save();
       res.send("Signup Successful");
  }
  catch(error){
    res.status(400).send("Signup failed");
  }
});
router.post("/login",async(req,res)=>{
   const {email,password}=req.body;
   try{const check=await user.findOne({email});
   if(!check||check.password!=password)
     res.status(401).send("Invalid Email or Password");
    const token=JWT.sign({email},SECRET_KEY);
    res.json({token});
    }
    catch(error){
        res.status(401).send("Login failed");
    }
});

module.exports=router;