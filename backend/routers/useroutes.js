const express=require('express')
const jwt= require("jsonwebtoken")
const router = express.Router()
const User=require("../model/userSchema")
const bcrypt=require('bcryptjs')
router.get("/",(req,res)=>{
    res.send(`hello world from server router.js`)
})


router.post('/Register',async(req,res)=>{
      console.log(req.body)
      const {name,email,password,cpassword}=req.body
      if(!name || !email || !password || !cpassword){
        return res.status(422).json({error:"please fill all the fields"})
      }
      try{
        const userExsist=await User.findOne({email})

        if(userExsist){
             return res.status(422).json({error:"Email already pesent"})
        }else if(password!=cpassword){
             return res.status(422).json({error:"password and confirm password not matching"})
        }

        const user=new User({name,email,password,cpassword})

        const userRegistered=await user.save()

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
            
            //const token=await Loginuser.generateAuthToken()
            //console.log(token)
            if(isMatch){
            return res.status(201).json({message:"Logged in succesfully"})
            }
            else{
               return res.status(422).json({error:"enter valid credentials"})
            }
         }
     }catch(err){
        console.log(`${err}`)
     }
})

module.exports=router