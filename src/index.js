import { app } from './app.js';

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/index.js';
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server running on port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed!!", err);  
})
