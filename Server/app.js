import express from 'express'
import mongoose  from "mongoose";
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'
import courseRouter from './Courses.js';
import studentRouter from './Students.js';
import teacherRouter from './teachers.js';
import noticeRouter from './dailyNotice.js'
import assignmentRouter from './courseAssgn.js';
dotenv.config()

const PORT =process.env.PORT || 8000
const MONGOURL=process.env.MONGO_CONNECTION_STRING

const corsOptions = {
  origin: '*',
  credentials: true
}
const app =express()
app.use(express.json())
app.use(cors(corsOptions))

app.use('/api',courseRouter) //get the courses
app.use('/api',studentRouter) // store the students 
app.use('/api',teacherRouter) // get the teachers
app.use('/api',noticeRouter) // get daily messages
app.use('/api',assignmentRouter) // get the assignmnet from the instructors 

//to filter course assignmnet with courseId

app.get(`/api/c`,async (req,res)=>{

  try {

    const[courseres, coursAssgnres] =await Promise.all([

      axios.get('http://localhost:8000/api/course'),
      axios.get('http://localhost:8000/api/assignment'),
      
    ])

    const course = courseres.data
    const ass= coursAssgnres.data
    console.log(course)
    console.log(ass)
   
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


mongoose
.connect(MONGOURL)
.then(()=>{
  app.listen(PORT,()=>console.log(`the server is running on ${PORT}`))
  console.log("the database is connected succefully ")
})

