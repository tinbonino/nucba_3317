import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";
import { checkoutValidationSchema,checkoutInitialValues } from "../../../formik";
import { CheckoutDatosStyled, Form, Formik } from "./CheckoutFormStyles";

const CheckoutForm = ({cartItems}) => {
  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
      initialValues={checkoutInitialValues}
      validationSchema={checkoutValidationSchema}
      onSubmit={(values)=>console.log(values)}
      >
      <Form>
          <Input
            htmlFor="nombre"
            type="text"
            id="nombre"
            placeholder="Tu nombre"
          >
            Nombre
          </Input>
          <Input
            htmlFor="celular"
            type="text"
            id="celular"
            placeholder="Tu celular"
          >
            Celular
          </Input>
          <Input
            htmlFor="localidad"
            type="text"
            id="localidad"
            placeholder="Tu localidad"
          >
            Localidad
          </Input>
          <Input
            htmlFor="direccion"
            type="text"
            id="dirección"
            placeholder="Tu dirección"
          >
            Dirección
          </Input>
          <div>
            <Submit disabled={!cartItems.length}>Iniciar Pedido</Submit>
          </div>
        </Form>
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
