import mongoose from "mongoose";

export const dbConnection = async ():Promise<void> =>{
    try {
        const dbURL= process.env.DB_URL;
        if(!dbURL) {
            throw new Error(`La URL no esta correctamente definida en los .env`);
        }

        await mongoose.connect(dbURL);
        console.log("Base de datos Online");
    } catch (error) {
        console.error(error);
        throw new Error("Error al iniciar la base de datos")
    }
}