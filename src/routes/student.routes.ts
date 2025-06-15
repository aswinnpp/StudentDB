import { Router } from 'express';
import { StudentController } from '../controllers/student.controller';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

const router = Router();
const studentService = new StudentService(Student);
const studentController = new StudentController(studentService);

// API Routes
router.post('/api/students', (req, res) => studentController.createStudent(req, res));
router.get('/api/students', (req, res) => studentController.getAllStudents(req, res));
router.get('/api/students/:id', (req, res) => studentController.getStudentById(req, res));
router.put('/api/students/:id', (req, res) => studentController.updateStudent(req, res));
router.delete('/api/students/:id', (req, res) => studentController.deleteStudent(req, res));

// View Routes
router.get('/', async (req, res) => {
    const result = await studentService.getAllStudents();
    res.render('index', { students: result.data || [] });
});

router.get('/admin', async (req, res) => {
    const result = await studentService.getAllStudents();
    res.render('admin/dashboard', { students: result.data || [] });
});

export default router; 