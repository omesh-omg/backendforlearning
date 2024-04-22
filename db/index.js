import mongoose from "mongoose";
import { DB_NAME,MONGODB_URL } from "../utils/constants.js";
import dotenv from "dotenv";


const connectDB=async ()=>{
    try {
        await mongoose.connect(`${MONGODB_URL}`);
        console.log("connected");
    } catch (error) {
        console.log(`${process.env.MONGODB_URL}`);
        console.error("database cannot connect",error);
    }
}

export default connectDB;