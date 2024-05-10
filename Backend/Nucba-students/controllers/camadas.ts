import { Request, Response } from "express";

import Camada, {ICamada} from "../models/camada";

export const createCamada = async (req: Request, res: Response) =>{
    const camadaData: ICamada = req.body;

    const {nombre, diasDeCursada, modulo} = camadaData;

    //validaciones

    // Estan todos los datos requeridos?

    if(!nombre || !diasDeCursada || !modulo) {
        res.json({
            msg: "Faltan datos necesarios para almacenar la camada"
        })
        return;
    }
    
    const camadaEnDB = await Camada.findOne({nombre:nombre});
    
    //existe en la base de datos?
    
    if(camadaEnDB){
        res.json({
            msg: "La camada ya existe"
        })
        return;
    }

    const camada= new Camada(camadaData);

    await camada.save();

    res.json({
        msg: "La camada se guardó correctamente"
    })
}