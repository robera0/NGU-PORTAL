import teacherModel from "./teachersModel.js";
import express from 'express'

const teacherRouter=express.Router()

teacherRouter.get('/teachers',async(req,res)=>{
   
    const teachersData = await teacherModel.find()
   
      res.status(200).json(teachersData)
})

export default teacherRouter