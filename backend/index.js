const express=require('express')
const dotenv=require('dotenv')
dotenv.config();
const connect_mongodb =require('./config/database');
const app=require('./app');

connect_mongodb();

const PORT=process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`server running on the port ${PORT}`);
});