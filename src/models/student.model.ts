import mongoose, { Schema, Document } from 'mongoose';
import { IStudent } from '../interfaces/student.interface';

export interface IStudentDocument extends IStudent, Document {}

const StudentSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true }
}, {
    timestamps: true
});

export const Student = mongoose.model<IStudentDocument>('Student', StudentSchema); 