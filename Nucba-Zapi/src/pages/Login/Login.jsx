import { Formik } from "formik";
import { Link } from "react-router-dom";
import { loginInitialValues, loginValidationSchema } from "../../formik";
import useRedirect from "../../hooks/useRedirect";

import LoginInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

import { useDispatch } from "react-redux";
import { loginUser } from "../../axios/axios-user";
import { setCurrentUser } from "../../redux/user/userSlice";
import { Form, LoginContainerStyled, LoginEmailStyled } from "./LoginStyles";

const Login = () => {
  const dispatch = useDispatch();
  useRedirect("/");

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password);
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
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <Link to="/register">
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
          <Submit>Ingresar</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
