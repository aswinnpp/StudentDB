import mongoose, { Schema, Document } from "mongoose";


export interface StudentInterface extends Document {
  name: string;
  mark: number;
  class: string;
  grade: string;
  rollno: number;
}

const studentSchema = new Schema<StudentInterface>(
  {
    name: { type: String, required: true },
    mark: { type: Number, required: true },
    class: { type: String, required: true },
    grade: { type: String, required: true },
    rollno: { type: Number, required: true, unique: true },
  },
  { timestamps: true }
);

const Student = mongoose.model<StudentInterface>("Student", studentSchema);
export default Student;
