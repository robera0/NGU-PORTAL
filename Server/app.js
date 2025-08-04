import express from 'express'
import cors from 'cors'
import fs  from 'fs'
import multer from 'multer'
import {fileURLToPath} from 'url'
import path from 'path'
import csTeachers from './teachers.js'
import enrolledCourses from './Courses.js'
import Students from './Students.js'
import dailyNotices from './dailyNotice.js'
import PdfParse from 'pdf-parse'
import { addSummary, getAllSummaries } from 'summary.js';
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

const { firstname, middlename, lastname, student_id, email, phone_number, gender, date_of_birth, country, address, 
  college, department, program, emergency_contact,  enrollment: { year, student_type }= {}, batch, semester, gpa, Profile
          }= req.body

const newStud={ id:Students.length + 1 , firstname, middlename, lastname, student_id, email, phone_number, gender, date_of_birth, country, address, college, department, program, emergency_contact,  enrollment: { year, student_type }, batch, semester, gpa, Profile}

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

//get daily notice 

app.get('/api/notice',(req,res)=>{

  res.status(200).json(dailyNotices)
})
// get the read messages

app.get('/api/notice/:id',(req,res)=>{

  const message = req.params.id

  const wantedmessage = dailyNotices.filter(item=>item.id === message)

  res.status(200).json(wantedmessage)
})

//get limited message 

app.get('/api/notice/:limit' ,(req,res)=>{

  const limit = parseInt(req.params.limit)

  const limitedMessage =dailyNotices.slice(0,limit)

  const message = dailyNotices



    res.status(200).json(limitedMessage)

})
//summerize the Pdf
const upload = multer({ dest: 'uploads/' });

 app.post('/api/notice/summerize', upload.single('file'),async(req,res)=>{

  const pdfBuffer = fs.readFile(req.file.path)


  try {
    const data = await PdfParse(pdfBuffer);
    const content = data.text;

    const summary = content.split('.').slice(0, 2).join('.') + '.';

  const savedSummary =addSummary(req.file.originalname, summary);

    res.json({ savedSummary });
  } catch (err) {
    res.status(500).send('Error parsing PDF');
  }

 })

 //get the summerized pdf
app.get('/api/summerize',(req,res)=>{

  res.status(200).json(summary)
})

app.listen(PORT,()=>console.log(`the server is running on ${PORT}`))