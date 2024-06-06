import * as Yup from 'yup';
import { regEmail } from '../utils';

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('Campo Requerido'),
  email: Yup.string()
    .matches(regEmail, 'Mail no valido')
    .required('Campo Requerido'),
  password: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, 'Mail no valido')
    .required('Campo Requerido'),
  password: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido'),
});

export const validateValidationSchema = Yup.object({
  code: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .max(6, 'Máximo de caracteres: 6')
    .required('Campo Requerido'),
});

export const issueValidationSchema = Yup.object({
  title: Yup.string().required('Campo Requerido'),
  description: Yup.string().required('Campo Requerido'),
  priority: Yup.number().required('Campo Requerido'),
});
