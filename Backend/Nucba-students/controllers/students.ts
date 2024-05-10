import { Request, Response } from "express";
import Student, { IStudent } from "../models/students";
import Camada from "../models/camada";


export const getStudents = async ({},res:Response)=>{
    
    const condicion = {estado:true};

    const students = await Student.find(condicion)
    .populate("camada","nombre");

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

    const {dni,nombre,camada,email} = studentData;

    const camadaData= await Camada.findOne({nombre: camada});

    if (!dni || !nombre || !camada || !email) {
        res.json({
            msg:"Faltan datos necesarios"
        })
        return
    }

    const alumnoEnDb = await Student.findOne({dni:dni})

    if(alumnoEnDb) {
        res.json({
            msg:"El alumno ya se encuentra registrado"
        }) 
        return;
    }

    const student = new Student(
        {
            dni,
            nombre,
            email,
            camada: camadaData?._id

        }
    );

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