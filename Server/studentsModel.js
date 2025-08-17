import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstname: String,
  middlename: String,
  lastname: String,
  student_id: String,
  email: String,
  phone_number: Number,
  gender: String,
  date_of_birth: Date,
  country: String,
  address: String,
  college: String,
  department: String,
  program: String,
  emergency_contact: String,
  enrollment: {
    year: String,
    student_type: String
  },
  batch: Number,
  semester: String,
  emergency_contact:String,
  password:String
});


const studentsModel = mongoose.model('student',studentSchema)

export default studentsModel