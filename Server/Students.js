import express from 'express'
import studentsModel from './studentsModel.js'


const studentRouter =express.Router()

// POST METHOD
studentRouter.post('/students', async(req,res)=>{
    const {student_id} = req.params 
  const student = studentsModel.find(student_id)
   if(!student){
      try{
     const newStudent = new studentsModel(req.body);
      await newStudent.save()
     res.status(201).json(newStudent);  
   } catch(err){
   res.status(401).json({ message: err.message })
  }
   }
   else{
       return res.json({ message: 'your already a student do you want to ' });
   }
   
   
 
}) 
 
//GET METHOD
studentRouter.get('/students',async(req,res)=>{
  try{
    const studentData= await studentsModel.find()
    res.status(200).json(studentData)
  }
  catch(err){
    res.status(400).json({message:err.message})
  }
}
)

export default studentRouter