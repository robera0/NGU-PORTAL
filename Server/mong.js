import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT || 8000
const MONGOURL= process.env.MONGO_CONNECTION_STRING

const app =express()

mongoose
.connect(MONGOURL)
.then(()=>{
console.log('the database is connected !')
  
})


app.listen(PORT,()=>console.log(`the server is running on ${PORT}`))