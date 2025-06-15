import { Student, IStudentDocument } from '../models/student.model';
import { IStudent, IStudentResponse, IStudentListResponse } from '../interfaces/student.interface';

export class StudentService {
    constructor(private readonly studentModel: typeof Student) {}

    async createStudent(studentData: IStudent): Promise<IStudentResponse> {
        try {
            const student = await this.studentModel.create(studentData);
            return {
                success: true,
                data: student
            };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to create student'
            };
        }
    }

    async getAllStudents(): Promise<IStudentListResponse> {
        try {
            const students = await this.studentModel.find();
            return {
                success: true,
                data: students
            };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to fetch students'
            };
        }
    }

    async getStudentById(id: string): Promise<IStudentResponse> {
        try {
            const student = await this.studentModel.findById(id);
            if (!student) {
                return {
                    success: false,
                    error: 'Student not found'
                };
            }
            return {
                success: true,
                data: student
            };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to fetch student'
            };
        }
    }

    async updateStudent(id: string, studentData: Partial<IStudent>): Promise<IStudentResponse> {
        try {
            const student = await this.studentModel.findByIdAndUpdate(
                id,
                studentData,
                { new: true }
            );
            if (!student) {
                return {
                    success: false,
                    error: 'Student not found'
                };
            }
            return {
                success: true,
                data: student
            };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to update student'
            };
        }
    }

    async deleteStudent(id: string): Promise<IStudentResponse> {
        try {
            const student = await this.studentModel.findByIdAndDelete(id);
            if (!student) {
                return {
                    success: false,
                    error: 'Student not found'
                };
            }
            return {
                success: true,
                data: student
            };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to delete student'
            };
        }
    }
} 