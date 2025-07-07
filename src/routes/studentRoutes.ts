
import express from 'express';
import {
  getAllStudents,
  adminPage,
  addStudent,
  updateStudent,
  deleteStudent
} from '../controllers/studentController';

const router = express.Router();

router.get('/', getAllStudents);
router.get('/admin', adminPage);
router.post('/add', addStudent);
router.post('/update/:id', updateStudent);
router.post('/delete/:id', deleteStudent);

export default router;
