import { Request, Response } from "express";

import {prisma} from "../app";

export const postNewIssue = async (req:Request, res: Response) =>{
    const {title, description,priority} = req.body;
    const usuario: number = req.body.usuarioConfirmado.id;

    const issueData = {
        title,
        description,
        priority,
        user: usuario,
        createdAt: new Date()
    }

    const issue = await prisma.issue.create({
        data: {
        ...issueData
        }
    })

    res.status(201).json({
        issue
    })
};