import { Request, Response } from "express";

import Camada, {ICamada} from "../models/camada";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCamada = async (req: Request, res: Response) =>{
    const camadaData: ICamada = req.body;

    const {nombre, diasDeCursada, modulo} = camadaData;

    //validaciones

    // Estan todos los datos requeridos?

    if(!nombre || !diasDeCursada || !modulo) {
        res.json({
            msg: "Faltan datos necesarios para almacenar la camada"
        })
        prisma.$disconnect();
        return;
    }
    
    // const camadaEnDB = await Camada.findOne({nombre:nombre});

    const camadaEnDB = await prisma.camada.findUnique({
        where:{
            nombre: nombre
        }
    })
    
    //existe en la base de datos?
    
    if(camadaEnDB){
        res.json({
            msg: "La camada ya existe"
        })
        prisma.$disconnect();
        return;
    }

    // const camada= new Camada(camadaData);

    // await camada.save();

    const camada = await prisma.camada.create({
        data: {
            nombre,
            diasDeCursada,
            modulo
        }
    })

    prisma.$disconnect();
    console.log(camada);

    res.status(201).json({
        msg: "La camada se guardó correctamente",
        camada
    })
}