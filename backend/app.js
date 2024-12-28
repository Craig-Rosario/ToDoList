const express=require('express');
const app= express();
require("./conn/conn.js")
const auth=require("./routes/auth.js")

app.use(express.json({}))

app.get("/",(req,res)=>{
    res.send("Hello world")
})


app.use("/api/v1",auth)
app.listen(5000,(req,res)=>{
    console.log("Server live on port 5000...");
})