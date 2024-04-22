import mongoose from "mongoose";
// import { DB_NAME } from "./utils/constants";
import connectDB from "./db/index.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})

// console.log(process.env.YES);
import app from "./utils/app.js";

connectDB()
.then(()=>{
    app.listen(8000);
    console.log(YES);
}).catch((err)=>{
    console.log(err);
});