import express from 'express'
import adminModel from './adminModel.js'

const adminrouter=express.Router()

adminrouter.get('/admins',async (req,res)=>{

    const admindata = await adminModel.find()

    res.status(200).json(admindata)
})


export default adminrouter