import express from 'express'
import mongoose  from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import courseRouter from './Courses.js';
import studentRouter from './Students.js';
import teacherRouter from './teachers.js';
import noticeRouter from './dailyNotice.js'
import assignmentRouter from './courseAssgn.js';
import aiRouter from './studyAi.js';
import course_assRouter from './course_ass.js';
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
app.use('/api',aiRouter)//to get ai summary 
app.use('/api',course_assRouter)//to filter course assignmnet with courseId
mongoose
.connect(MONGOURL)
.then(()=>{
  app.listen(PORT,()=>console.log(`the server is running on ${PORT}`))
  console.log("the database is connected succefully ")
})

