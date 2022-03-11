const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const User = require('./model/userSchema')
const jwt = require('jsonwebtoken');

dotenv.config();
//middlewares
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_ACCESS,console.log("database connected"))

//requests 
app.post('/signup', async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const user  = await User.create({
            name,email,password,
            userItems:""
        })
        return res.json({status:200,response:"ok"})
    }
    catch(err){
        console.log(err)
        return res.json({status:404,error:err.message})
    }
    
})
app.post('/login',async(req,res)=>{
    const user = await User.findOne({email:req.body.email,password:req.body.password});
        if(user){
            const token = jwt.sign({
                email:req.body.email,
                password:req.body.password
            },'secret123')
            return res.json({status:'ok',user:token})
        }
        else{
            return res.json({status:'error',user:false})
        }
})
 app.post('/user',async(req,res)=>{
    const user = await User.findOne({email:req.body.email});
    if(user){
        return res.json({status:'ok',
        _id:user._id,
        name:user.name,
        email:user.email,
        userItems:user.userItems
    })
    }
    else{
        return res.json({status:'error',user:false})
    }

 })
app.get('/',(req,res)=>{
   res.send("I am here");
}) 

app.listen('4000',console.log("server started at 4000"));




//dont allow multiple users with sames name
// password bcrypt
// add cart option
//user post get 
//add logout button
//add same page for signup and login
//adding a loader