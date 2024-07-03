import { Router } from "express";
import { check } from "express-validator";
import {existeEmail} from "../helpers/validacionesDB"
import { recolectarErrores } from "../middlewares/recolectarErrores";
import { register } from "../controllers/auth";
import { login } from "../controllers/auth";
import { verifyUser } from "../controllers/auth";

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

router.post("/login",
[
    check("email","el email es obligatorio").isEmail(),
    check("password","El password debe tener al menos 6 caracteres").isLength({
        min:6
    }),
    recolectarErrores
], login
);

router.patch("/verify",
    [
        check("email","El email es requerido").not().isEmpty(),
        check("code","El código de verificacion es requerido").not().isEmpty(),
        recolectarErrores
    ],
    verifyUser
)

export default router;
