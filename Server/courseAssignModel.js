import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },  
  due_date: { type: Date, required: true },
  weight: { type: String, required: true }, 
  status: { type: String, default: "pending" } 
});

const assignmentSchema = new mongoose.Schema({
  course_id: { type: String, required: true },
  assessments: { type: [assessmentSchema], default: [] }
});

const asssignmentModel = mongoose.model("Assignment", assignmentSchema);

export default asssignmentModel;
