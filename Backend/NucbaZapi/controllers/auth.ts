import { Request,Response } from "express";
import Usuario, {IUser} from "../models/usuario";
import bcryptjs from "bcryptjs";
import { ROLES } from "../helpers/constants";
import randomstring from "randomstring";

import { sendEmail } from "../mailer/mailer";

export const register = async (req: Request, res: Response):Promise<void> => {
    
    const {nombre, email, password, rol}:IUser = req.body;

    const usuario= new Usuario ({nombre,email,password,rol});

    const salt=bcryptjs.genSaltSync();

    usuario.password= bcryptjs.hashSync(password,salt)

    const adminKey= req.headers["admin-key"];

    if (adminKey===process.env.KEYFORADMIN) {
        usuario.rol=ROLES.admin;
    }
    const newCode = randomstring.generate(6);
    
    usuario.code=newCode;

    await usuario.save();

    await sendEmail(email,newCode)

    res.status(201).json({usuario})
}
