import mongoose from "mongoose";

const videoSchema= mongoose.Schema({
    videoFile:{
        type:String,
        required: true,
    },
     thumbnail:{
        type:String,
        required:true,
     },
     title:{
        type:String,
     },
     description:{
        type:String,
     },duration:{
        type:Number,
     },
     views:{
        type:Number,
     },
     isPublished:{
        type:Boolean,
        default:true
     },
     owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

     }
},{
    timestamps:true,
})

export const Video=mongoose.model("Video",videoSchema);