import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name :String,
  phone:Number,
  location:String,
  role:String,
  username:String,
  password:String

})

const adminModel = mongoose.model('admin',adminSchema)

export default adminModel