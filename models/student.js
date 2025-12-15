import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: String,
  progress: Number,
  grade: String
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true },
  email: { type: String, required: true },
  attendance: { type: Number, default: 0 },
  subjects: [subjectSchema]
});

export default mongoose.model("Student", studentSchema);
