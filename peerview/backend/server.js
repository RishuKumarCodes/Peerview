import express from "express";
import dotenv from "dotenv";
import  connectDB from "./configs/db.js";
dotenv.config();



const app = express();
const PORT = process.env.PORT || 3001;
connectDB();



app.get('/',(req,res)=>{
    res.send('Root is groot');
})

app.listen(PORT,()=>console.log(`App listening on port ${PORT}`));