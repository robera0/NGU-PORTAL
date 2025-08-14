import mongoose from "mongoose"

const teacherSchema= new mongoose.Schema({
      name:String,
      subject:String,
      title:String,
      profile:String
})

const teacherModel=mongoose.model("teacher",teacherSchema)

export default teacherModel