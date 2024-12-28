const router=require('express').Router();
const User=require('../models/user.js');
const bcrypt=require("bcryptjs");


//Sign up
router.post("/register", async(req,res)=>{
    try{
        const {email,username,password}=req.body;
        const hashPassword=bcrypt.hashSync(password);
        const user=new User({email,username,password:hashPassword});
        await user.save().then(()=>
            res.status(200).json({user:user})
        )
    }catch(error){
        if (error.code === 11000) {
            return res.status(400).json({ message: "Username or Email already exists" });
        }
        res.status(400).json({ message: "Internal server error" });
    }
})


//Sign in


router.post("/signin",async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            res.status(400).json({message:"Please sign up first"})
        }
        const isPasswordCorrect=bcrypt.compareSync(req.body.password,user.password);

        if(!isPasswordCorrect){
            res.status(400).json({message:"Password is not correct"})
        }
        const{password,...others}=user.toObject();
        res.status(200).json({others});
    }
    catch(error){
        res.status(400).json({message:"User already exists"});
    }
})


module.exports=router;  