import * as Yup from "yup";
import { regEmail } from "../utils";

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required("Campo Requerido"),
  cellphone: Yup.string().required("Campo Requerido"),
  location: Yup.string().required("Campo Requerido"),
  address: Yup.string().required("Campo Requerido"),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required("Campo Requerido"),
  email: Yup.string()
    .matches(regEmail, "Mail no valido")
    .required("Campo Requerido"),
  password: Yup.string()
    .min(6, "Mínimo de caracteres: 6")
    .required("Campo Requerido"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, "Mail no valido")
    .required("Campo Requerido"),
  password: Yup.string()
    .min(6, "Mínimo de caracteres: 6")
    .required("Campo Requerido"),
});

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, "Mail no valido")
    .required("Campo Requerido"),
});
