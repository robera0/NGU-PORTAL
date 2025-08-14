
import courseModel from './courseModel.js'; 
import studentsModel from './studentsModel.js'
import express from 'express'
//get the courses

const courseRouter = express.Router()

courseRouter.get('/course', async (req,res)=>{
    
    const coursedata = await courseModel.find()

 res.status(200).json(coursedata)
}
)

// get courses with department

courseRouter.get('/course/:departemnt', async (req,res)=>{
    const {department}= req.params
    const coursedep= studentsModel.find(department)
    const coursedata = await courseModel.find(department)

 res.status(200).json(coursedata)
}
)


export default courseRouter