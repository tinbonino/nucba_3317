import { ErrorMessageStyled,InputBoxStyled, InputLabelStyled, InputStyled } from "./InputStyles";
import {ErrorMessage,Field} from "formik";

const Input = ({ children, name,htmlFor, type, id, placeholder }) => {
  return (
   <Field name={name}>
    {({field,form: {errors,touched}})=> (
       <InputBoxStyled>
       <InputLabelStyled htmlFor={htmlFor}>{children}</InputLabelStyled>
       <InputStyled
         type={type}
         id={id}
         placeholder={placeholder}
         {...field}
         isError={errors[field.name] && touched[field.name]}
       />
       <ErrorMessage name={field.name}>
         {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
       </ErrorMessage>
     </InputBoxStyled>
    )}
   </Field>
  );
};

export default Input;
