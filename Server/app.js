import express from 'express'
import cors from 'cors'
import {fileURLToPath} from 'url'
import path from 'path'
import csTeachers from './teachers.js'
import enrolledCourses from './Courses.js'
import Students from './Students.js'

const PORT =process.env.PORT || 8000

const app =express()

app.use(express.json())

const corsOptions = {
  origin: '*',
  credentials: true
}

app.use(cors(corsOptions))

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

app.use(express.static(path.join(__dirname,'./assets')))



// get the teachers
app.get('/api/csteachers',cors(corsOptions),(req,res)=>{

 res.status(200).json(csTeachers)
})

//get the courses

app.get('/api/courses',cors(corsOptions),(req,res)=>{

 res.status(200).json(enrolledCourses)
})

// Store the Student info on the server

app.post('/api/students', (req,res)=>{

const {  First_name, Middle_name,Last_name,Degree_Program,id_Number,Email,Phone_Number,Country,High_School_Name}= req.body

const newStud={ id:Students.length + 1 , First_name, Middle_name,Last_name,Degree_Program,id_Number,Email,Phone_Number,Country,High_School_Name

}
Students.push(newStud)

res.status(200).json(Students)
})

// get the Students info
app.get('/api/students',(req,res)=>{

 res.status(200).json(Students)
})

//get the courses

app.get('/api/courses',(req,res)=>{

 res.status(200).json(enrolledCourses)
})



app.listen(PORT,()=>console.log(`the server is running on ${PORT}`))