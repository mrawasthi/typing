//require('dotenv').config();
const express=require("express");
const mongoose =require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")
const cookieparser=require("cookie-parser")
const app=express()
const PORT=3000;

app.use(express.json())
app.use(cors())
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(require('./routers/useroutes'))

mongoose.connect("mongodb+srv://ayush2:1234567890@cluster0.ks4cqhn.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successfull we are here")
}).catch((err)=> console.log(`${err}`+ "failed"))

app.get("/",(req,res)=>{
    res.status(200).send("hello world");
})
app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})