import mongoose  from "mongoose";
 
const courseSchema= new mongoose.Schema({
     course_id:String,
     course_name: String,
     instructor: String,
     credit_hours: Number,
     semester: String,
     icon: String,
     grade: String,
     grade_point: Number,
     course_fee: Number

})

const courseModel = mongoose.model('course',courseSchema)

export default courseModel