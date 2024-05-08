import { Request, Response } from "express";
import Student, { IStudent } from "../models/students";


export const getStudents = async ({},res:Response)=>{
    
    const condicion = {estado:true};

    const students = await Student.find(condicion);

    res.json({students})

    console.log("Estudiantes enviados")
}

export const getStudentByDNI = async (req:Request, res: Response) =>{

    const {dni} = req.params;

    const student : IStudent | null = await Student.findOne({dni:dni})

    res.json({student})
}

export const createStudent = async (req: Request, res: Response) =>{

    const studentData: IStudent =req.body;

    const student = new Student(studentData);

    await student.save();

    res.json({
        msg: "Esta todo bien amigo!",
        student
    })

    console.log("Estudiante creado con éxito")

}

export const updateStudent = async (req: Request, res: Response) => {
    const { dni } = req.params;

    const {...data} = req.body;

    const student = await Student.findOneAndUpdate({dni: dni}, data);

    res.json({
        student
    })
};

export const deleteStudent = async (req: Request, res: Response) => {
    const { dni } = req.params;

    const student = await Student.findOneAndDelete({dni:dni});

    if(!student) {
        res.json({
            msg: "El alumno no fue enocntrado en la DB"
        })
        return
    }

    res.json({
        student
    })
    
}