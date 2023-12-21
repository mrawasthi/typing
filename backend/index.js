//require('dotenv').config();
const express=require("express");
const mongoose =require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")
const cookieparser=require("cookie-parser")
const app=express()
const PORT=3000;
//const URL=process.env.MONGO_URL
app.use(express.json())
app.use(cors())
app.use(cookieparser())

mongoose.connect("mongodb+srv://ayushhkumar135:ILIKEPRO@cluster0.ks4cqhn.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    //useCreateIndex:true,
    useUnifiedTopology:true,
    //useFindAndModify:false,
}).then(()=>{
    console.log("connection successfull we are here")
}).catch((err)=> console.log(`${err}`+ "failed"))

app.get("/",(req,res)=>{
    res.status(500).send("hello world");
})
app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})