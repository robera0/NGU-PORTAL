
import express from 'express'

 const app = express()
 const PORT = 9000

 app.use(express.json())
const users =[
  {id:0 , name:'robera',age:17}

]

app.post('/api/users',(req,res)=>{

  const {name, age} =req.body

  const newUser = { id:users[users.length - 1].id + 1, name ,age
  }

  users.push(newUser)

  res.status(200).json(users)
})

app.listen(PORT,()=>console.log(`the server is running on ${PORT}`))

