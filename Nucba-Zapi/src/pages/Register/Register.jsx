import { Formik } from "formik";
import { useLocation } from "react-router-dom";
import { registerInitialValues, registerValidationSchema } from "../../formik";
import useRedirect from "../../hooks/useRedirect";

import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

import { useDispatch } from "react-redux";
import { createUser } from "../../axios/axios-user";
import { setCurrentUser } from "../../redux/user/userSlice";
import { Form, LoginContainerStyled, LoginEmailStyled } from "./RegisterStyles";

const Register = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  useRedirect(state?.redirectedFromCheckout ? "/checkout" : "/");

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(
            values.name,
            values.email,
            values.password
          );
          actions.resetForm();
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
          }
        }}
      >
        <Form>
          <LoginInput name="name" type="text" placeholder="Nombre" />
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <LoginEmailStyled to="/login">
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>Registrarte</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
