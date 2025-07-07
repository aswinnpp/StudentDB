import { Request, Response } from "express";
import Student from "../models/Student";

export const getAllStudents = async (req: Request, res: Response) => {
  const students = await Student.find();
  res.render("home", { students });
};

export const adminPage = async (req: Request, res: Response) => {
  const students = await Student.find();
  res.render("admin", { students });
};

export const addStudent = async (req: Request, res: Response) => {
  let { rollno } = req.body;

  console.log(rollno);

  let exist = await Student.find({ rollno: rollno });

  if (exist) {
    console.log("already use roll number");

    res.redirect("/admin");
    return;
  }

  await Student.create(req.body);
  res.redirect("/admin");
};

export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Student.findByIdAndUpdate(id, req.body);
  res.redirect("/admin");
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Student.findByIdAndDelete(id);
  res.redirect("/admin");
};
