import { Router } from "express";
import { check } from "express-validator";
import {existeEmail} from "../helpers/validacionesDB"
import { recolectarErrores } from "../middlewares/recolectarErrores";
import { register } from "../controllers/auth";

const router=Router();

router.post("/register",[

    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("email","El email no es válido").isEmail(),
    check("password","El password debe tener al menos 6 caracteres").isLength({
        min:6
    }),
    check("email").custom(existeEmail),

    recolectarErrores,



],register);

export default router;
