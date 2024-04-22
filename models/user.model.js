import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { ACCESS_TOKEN_EXPIRY, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRY, REFRESH_TOKEN_SECRET } from "../utils/constants";


const userSchema= mongoose.Schema({
    username:{
        type: String,
        required: true,

        
    },
    email:{
        type: String,
        required:true
    },
    fullname:{
        type: String,
        required:true,
    },
    coverimage:{
        type: String,
    }
    ,watchHistory:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Video"
    },
    password:{
        type: String,
        required:[true,"password is required"],
    }
    ,refreshToken:{
        type:String,
    }

})

userSchema.pre("save",async function(next){
    if(!this.isModified(this.password))
    this.password= bcrypt.hash(this.password,10)
    next();
})
userSchema.methods.isPasswordCorrect =async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessToken=function(){
    return
    jwt.sign({
        _id:this._id,
        email:this.email,
        username: this.username,
        fullname: this.fullname,
    },ACCESS_TOKEN_SECRET),{
        expiresIn: ACCESS_TOKEN_EXPIRY
    }
}

userSchema.methods.generateAccessToken=function(){
    return
    jwt.sign({
        _id:this._id,
        
    },REFRESH_TOKEN_SECRET),{
        expiresIn: REFRESH_TOKEN_EXPIRY
    }
}
export const User=mongoose.model("User",userSchema);