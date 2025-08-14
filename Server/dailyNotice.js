import express from 'express'
import dailyNoticeModel from './dailyNoticeModel.js'
const noticeRouter= express.Router()

noticeRouter.get('/notices',async(req,res)=>{
    try {
  const noticeData = await dailyNoticeModel.find()
  res.status(200).json(noticeData)
    }
    catch(err){
      res.status(400).json({message:err.message})
    }
  
}) 

export default  noticeRouter