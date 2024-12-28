const router = require("express").Router();
const User = require("../models/user.js");
const List = require("../models/list.js");
const { response } = require("express");


//create
router.post("/addTask", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const list = new List({ title, body, user: existingUser });
            await list.save().then(()=>res.status(200).json({list}));
            existingUser.list.push(list);
            existingUser.save();
        }
    }catch(error){
        console.log(error);
    }
})

//update
router.put("/updateTask/:id",async(req,res)=>{
    try {
        const {title,body,email}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            const list=await List.findByIdAndUpdate(req.params.id,{title,body});
            list.save().then(()=>res.status(200).json({message:"Task Updated"}));
        }

    } catch (error) {
        
    }
})



//delete
router.delete("/deleteTask/:id",async(req,res)=>{
    try {
        const{email}=req.body;
        const existingUser=await User.findOneAndUpdate({email},{$pull:{list:req.params.id}});
        if(existingUser){
            await List.findByIdAndDelete(req.params.id).then(()=>res.status(200).json({message:"Task deleted"}));
        }
    } catch (error) {
        
    }
})


//getTask
router.get("/getTask/:id",async(req,res)=>{
    try{
        const list=await List.find({user:req.params.id});
        res.status(200).json({list});

        if(list.length!==0){
            res.status(200).json({list:list});
        }
        else{
            res.status(200).json({message:"No Tasks"});
        }

    }catch(error){
        res.status(400).json({ message: "Internal server error" });
    }
})






module.exports = router;