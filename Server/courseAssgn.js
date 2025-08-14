import express from 'express'
import assignmentModel from './courseAssignModel.js'

const assignmentRouter=express.Router()

assignmentRouter.get('/assignment',async(req,res)=>{

  try
     {
       console.log('Attempting to fetch data...')
        const assignmentData= await assignmentModel.find()
        console.log('Data fetched:', assignmentData);
        
         res.status(200).json(assignmentData)
  }
    catch(err)
               {
                 res.status(400).json({message:err.message})
  }
}
)

export default assignmentRouter