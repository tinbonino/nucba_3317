import {Request,Response} from "express";

const logController = (req:Request, res: Response):void => {
    const method=req.method;
    const timestamp= new Date().toLocaleDateString();

    console.log(`[${timestamp}] Método: ${method} ejecutando el controlador de LOG`);

    res.json({
        message:"Hola! Ese es un mensaje desde el controlador de LOG",
        method,
        timestamp
    })
}

const postController = (req:Request,res:Response):void => {
  const method=req.method;
  const timestamp=new Date().toLocaleString();

  console.log(`[${timestamp}] Método ${method} ejecutado`);

  const saludo=req.body.saludo;

  if(!saludo){
    console.error(`[${timestamp}] Falta el campo "saludo" en la solicitud`);
    res.status(400).json({
        error:"Campo faltante",
        message:"Falta el campo 'saludo' en la solicitud"
    });
    return;
  }

  res.status(201).json({
    message:"Hola este es un mensaje desde un controlador",
    receivedSaludo:saludo,
    method,
    timestamp
  });
};

export {logController,postController};
