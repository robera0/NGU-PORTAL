import express from 'express'
import axios from 'axios'
const course_assRouter = express.Router()

course_assRouter.get("/c",async (req,res)=>{
  try {
    const[courseres, coursAssgnres] =await Promise.all([
    axios.get('http://localhost:8000/api/course'),
    axios.get('http://localhost:8000/api/assignment'),     
    ])
    const course = courseres.data
    const ass= coursAssgnres.data
    const filterdAssgn = course.map((c)=>{
    const co = ass.find(co => co.course_id === c.course_id);
    return {
          course_id:co?.course_id,
          type:co?.assessments?.map((a=>({     
           title:a?.title,
            weight:a?.weight ,
           due:a?.due_date 
      }))) || 'not assigned',
         instructor:c.instructor,
         course_name: c.course_name,     
      }
    })
        res.json(filterdAssgn);
  }
 catch (err) {
    res.status(500).json({ error: 'Failed to fetch or combine data' });
  }
})

export default course_assRouter