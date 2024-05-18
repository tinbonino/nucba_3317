import { Schema, model } from "mongoose";

// Primero creo la interface

interface IUser {
    email: string;
    password: string;
}

//Defino la estructura del schema en base a esa interface

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }

})

// creo el modelo en base al schema

const User =model<IUser>("User",userSchema);

//export el modelo

export default User;