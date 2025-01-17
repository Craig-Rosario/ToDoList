const express=require('express');
const app= express();
const cors=require("cors");
require("./conn/conn.js");
const auth=require("./routes/auth.js");
const list=require("./routes/list.js");

app.use(express.json({}));
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello world")
})


app.use("/api/v1",auth);
app.use("/api/v2",list);

app.listen(5000,(req,res)=>{
    console.log("Server live on port 5000...");
})