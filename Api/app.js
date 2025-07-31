import express from 'express'
import cors from 'cors'
import {fileURLToPath} from 'url'
import path from 'path'
import csTeachers from './teachers.js'
import enrolledCourses from './Courses.js'
const PORT =process.env.PORT || 8000

const app =express()

const corsOptions = {
  origin: '*',
}

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

app.use(express.static(path.join(__dirname,'./src')))

// get the teachers
app.get('/api/csteachers',cors(corsOptions),(req,res)=>{

 res.status(200).json(csTeachers)
})

//get the courses

app.get('/api/courses',cors(corsOptions),(req,res)=>{

 res.status(200).json(enrolledCourses)
})




app.listen(PORT,()=>console.log(`the server is running on ${PORT}`))