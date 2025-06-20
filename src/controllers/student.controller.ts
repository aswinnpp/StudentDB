import { Request, Response } from 'express';
import { StudentService } from '../services/student.service';
import { IStudent } from '../interfaces/student.interface';

export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    async createStudent(req: Request, res: Response): Promise<void> {
        const studentData: IStudent = req.body;
        const result = await this.studentService.createStudent(studentData);
        
        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(400).json(result);
        }
    }

    async getAllStudents(req: Request, res: Response): Promise<void> {
        const result = await this.studentService.getAllStudents();
        
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(500).json(result);
        }
    }

    async getStudentById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const result = await this.studentService.getStudentById(id);
        
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    }

    async updateStudent(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const studentData: Partial<IStudent> = req.body;
        const result = await this.studentService.updateStudent(id, studentData);
        
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    }

    async deleteStudent(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const result = await this.studentService.deleteStudent(id);
        
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    }
} 