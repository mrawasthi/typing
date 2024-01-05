const express=require('express')
const app=express()
const jwt= require("jsonwebtoken")
const router = express.Router()
const User=require("../model/userSchema")
const Post=require('../model/postModel')
const bcrypt=require('bcryptjs')
const cors = require('cors');
const cookieParser = require("cookie-parser");
router.use(cookieParser());
const authenticate=require("../middlewares/authenticate.js")

router.get("/",(req,res)=>{
    res.send("ok")
})

router.post('/Register',async(req,res)=>{
      console.log(req.body)
      const {name,email,password,cpassword}=req.body
      if(!name || !email || !password || !cpassword){
        return res.status(422).json({error:"please fill all the fields"})
      }
      try{
        const userExist=await User.findOne({email})
        if(userExist){
            return res.status(422).json({error:"Email already pesent"})
        }else if(password!=cpassword){
            return res.status(422).json({error:"password and confirm password not matching"})
        }

        const user=new User({name,email,password,cpassword})
        await user.save()

        res.status(201).json({message:"user created successfully"})
      }catch(err){
        console.log(`${err}`)
      }
})


router.post("/Login",async(req,res)=>{
     try{
         const {email,password} = req.body
         if(!email || !password){
            return res.status(422).json({error:"please fill all fields"})
         } 
         const Loginuser=await User.findOne({email})

         if(!Loginuser){
            return res.status(422).json({error:"please enter valid credentials"})
         }
         else{
            const isMatch=await bcrypt.compare(password,Loginuser.password)
            if(isMatch){
               const token=await Loginuser.generateAuthToken()
               console.log(token);

               res.status(201).json({ message: "user Signin Successfully",token:token});
            }
            else{
               return res.status(422).json({error:"enter valid credentials"})
            }
         }
     }catch(err){
        console.log(`${err}`)
     }
})

router.post('/create-post',async(req,res)=>{
   try{
      
      const {title,content}=req.body
      console.log(title)
      console.log(content)
      const post=new Post({title,content})
      //console.log("11")
      const postData=await post.save();
      if(!postData){
         console.log ("here")
         return res.status(422).json({message:"error occured"})
      }else{
      return res.status(201).json({message:"post added sucessfully"})
      }
   }catch(err){
      
      return res.status(422).json({message:"error occured 1"})
   }
})
router.get('/check',authenticate,(req,res)=>{
   try{
      const userdata=req.user
      res.status(200).json({msg:userdata})
   }catch(err){
      console.log("${err}")
   }
})
module.exports=router