import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/",authRoutes);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "";

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log("Conectado a la base de datos");
  app.listen(PORT, () => {
    console.log(`Servidor ejecutado en el puerto ${PORT}` )
  });
})
.catch(err=>{
    console.error(err)
})


