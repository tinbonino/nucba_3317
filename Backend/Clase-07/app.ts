import express, {Application} from "express";
import { logController,postController } from "./controllers/controllers";
// Inicializamos la app en express
const app: Application=express();
// Establecemos el middleware para que pueda leer json
app.use(express.json());

//creamos las rutas
app.post("/log",postController);
app.get("/mensaje",logController);

// ponemos el servidor a escuchar el puerto :3000
app.listen(3000,() => {
  console.log("El servidor esta escuchando el puerto 3000")
})