
import { Request, Response } from 'express';
import Student from '../models/Student';

export const getAllStudents = async (req: Request, res: Response) => {
  const students = await Student.find();
  res.render('home', { students });
};

export const adminPage = async (req: Request, res: Response) => {
  const students = await Student.find();
  res.render('admin', { students });
};

export const addStudent = async (req: Request, res: Response) => {
  await Student.create(req.body);
  res.redirect('/admin');
};

export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Student.findByIdAndUpdate(id, req.body);
  res.redirect('/admin');
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Student.findByIdAndDelete(id);
  res.redirect('/admin');
};
