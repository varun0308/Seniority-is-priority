const mongoose= require("mongoose");
const validator = require("validator");


const userSchema =mongoose.Schema({
    Name:{
        type:String,
        required:true,
        minLength:3
    },
    Email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    Phonenumber:{
        type:String,
        required:true,
        minLength:10
    },
    City:{
        type:String,
        required:true,
        minLength:3
    },
    query:{
        type:String
    }

})

const User = mongoose.model("User",userSchema);

module.exports = User;

