import Usuario, { IUser } from "../models/usuario";


export const existeEmail = async (email: string):Promise<void> => {

	const existeMail: IUser | null = await Usuario.findOne({ email });
	if (existeMail) {
		throw new Error(`El correo ${email} ya está registrado`);
	 }
    
};