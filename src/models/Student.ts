
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mark: { type: Number, required: true },
  class: { type: String, required: true },
  grade: { type: String, required: true },
  rollno: { type: Number, required: true, unique: true }
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);
