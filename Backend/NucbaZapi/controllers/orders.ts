import { Request, Response } from "express";
import Order, { IOrder } from "../models/order";
import { ObjectId } from "mongoose";

export const getOrdenes = async (req: Request, res:Response): Promise<void> => {    
	const usuarioId: ObjectId = req.body.usuarioConfirmado._id;
	//verificamnos y almacenamos el id de usuario
	const consulta = { user: usuarioId };
	//Buscamos el usuario en la colección de orders
	const orders = await Order.find(consulta);
	//Retornamos las ordenes correspondientes al usuario
	res.json({
		data: [...orders],
	});
};

export const createOrder = async (req: Request, res: Response): Promise<void> => {
	const usuario: ObjectId = req.body.usuarioConfirmado._id;

	const orderData: IOrder = req.body;

	const data = {
		...orderData,
		user: usuario,
		createdAt: new Date(),
		status: "pending",
	};

	const order = new Order(data);

	await order.save();

	res.status(201).json({
		order,
	});
	

}