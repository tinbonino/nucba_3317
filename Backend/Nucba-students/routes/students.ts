import { Router } from "express";
import { getStudents, getStudentByDNI, createStudent,updateStudent,deleteStudent } from "../controllers/students"

const studentRoutes = Router();

studentRoutes.get("/",getStudents);

studentRoutes.get("/:dni", getStudentByDNI);

studentRoutes.post("/", createStudent);

studentRoutes.put("/:dni", updateStudent);

studentRoutes.patch("/:dni", updateStudent);

studentRoutes.delete("/:dni", deleteStudent);

export default studentRoutes;