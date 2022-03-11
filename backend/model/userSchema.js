const mongoose = require('mongoose');
const User = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    userItems:{type:String}, 
   
})
const model = mongoose.model('UserData', User);
module.exports = model;