import { Request, Response } from "express";
import Student, { IStudent } from "../models/students";
// import Camada from "../models/camada";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getStudents = async ({},res:Response)=>{
    
    const condicion = {estado:true};

    // const students = await Student.find(condicion)
    // .populate("camada","nombre");

    const students = await prisma.student.findMany({
        where:condicion
    })

    prisma.$disconnect();

    res.json({students})

    console.log("Estudiantes enviados")
};

export const getStudentByDNI = async (req:Request, res: Response) =>{

    const {dni} = req.params;

    // const student : IStudent | null = await Student.findOne({dni:dni})

    const student= await prisma.student.findUnique({
        where:{
            dni:+dni
        }
    })

    prisma.$disconnect();

    res.json({student})
}

export const createStudent = async (req: Request, res: Response) =>{

    const studentData: IStudent =req.body;

    const {dni,nombre,camada,email} = studentData;

    // const camadaData= await Camada.findOne({nombre: camada});

    const camadaData= await prisma.camada.findUnique({
        where:{
            nombre: camada
        }
    })

    if (!dni || !nombre || !camada || !email) {
        res.json({
            msg:"Faltan datos necesarios"
        })
        prisma.$disconnect();
        return
    }

    if(!camadaData){
        res.json({
            msg:"La camada no existe"
        })
        prisma.$disconnect();
        return
    }

    // const alumnoEnDb = await Student.findOne({dni:dni})


    const alumnoEnDb= await prisma.student.findUnique({
        where:{
            dni:dni
        }
    });



    if(alumnoEnDb) {
        res.json({
            msg:"El alumno ya se encuentra registrado"
        }) 
        prisma.$disconnect();
        return;
    }

    const student =
        {
            dni,
            nombre,
            email,
            camada: camadaData?.nombre

        }
    ;

    // await student.save();

    const studentToSave=await prisma.student.create({
        data:student
    })

    prisma.$disconnect();

    res.json({
        msg: "Todo Perfecto!",
        studentToSave
    })

    console.log("Estudiante creado con éxito")

}

export const updateStudent = async (req: Request, res: Response) => {
    const { dni } = req.params;

    const {estado, camada, ...data} = req.body;

    // const student = await Student.findOneAndUpdate({dni: dni}, data);

    const student = await prisma.student.update({
        where:{
            dni:+dni,
        },
        data:data
    })

    prisma.$disconnect();

    res.json({
        student
    })
};

export const deleteStudent = async (req: Request, res: Response) => {
    const { dni } = req.params;

    // const student = await Student.findOneAndDelete({dni:dni});
    
    //Eliminar alumno
    const student= await prisma.student.delete({
        where: {
            dni:+dni
        }
    })

    // Desactivar alumno

    // const student= await prisma.student.update({
    //     where:{
    //         dni:+dni
    //     },
    //     data: {
    //         estado:false
    //     }
    // })
    
    
    
    if(!student) {
        res.json({
            msg: "El alumno no fue enocntrado en la DB"
        })

        prisma.$disconnect();
        return
    }
    res.json({
        student
    })
    
}