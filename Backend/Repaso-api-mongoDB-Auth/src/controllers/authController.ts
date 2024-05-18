import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/userModel";

const register = async (req: Request, res: Response) =>{
    const {email,password} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message:"El usuario ya existe"});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({email, password:hashedPassword});

        await newUser.save();

        res.status(201).json({message: "Usuario registrado correctamente"});

    } catch (err) {
        res.status(500).json({message: "Error del servidor"});
    }
};


const login = async (req: Request, res: Response) => {
  
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Credenciales invalidas"})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({message: "Credenciales invalidas"});
        }

        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET!,{expiresIn:"1h"});

        res.json({token});

    } catch (err){
        res.status(500).json({message:"Error del servidor"})
    }
};

export {login,register};