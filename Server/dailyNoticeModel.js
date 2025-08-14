import mongoose from "mongoose";

const dailyNoticeSchema= new mongoose.Schema({
  title:String,
  message:String,
  note:String,
  details:String,
  date:Date
})

const dailyNoticeModel=mongoose.model('notice',dailyNoticeSchema)

export default dailyNoticeModel