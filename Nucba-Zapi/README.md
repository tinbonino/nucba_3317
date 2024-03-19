🚨 En esta rama, se encuentra detallada la clase 6 del proyecto. 🚨

## Clase 6 - Orders & Resumen 🍕

En la última clase práctica del NucbaZappi implementaremos los siguiente features a nuestro proyecto:

- Creación y consumo de órdenes.
- Vista dinámica de cada orden con el desglose de la misma.

<br>

## Archivos modificados

| Archivo                                     | Descripción                                                             |
| :------------------------------------------ | :---------------------------------------------------------------------- |
| `axios/axios-orders.js`                     | Funciones relacionadas a la creación y consumo de órdenes               |
| `redux/orders/orders-reducer.js`            | Reducer de las órdenes en Redux                                         |
| `redux/store.js`                            | Agregar reducer de las órdenes                                          |
| `components/Checkout/Form/CheckoutForm.jsx` | Evento onSubmit (Formik) para el envío del form + loader en el botón    |
| `pages/MisOrdenes/MisOrdenes.jsx `          | Consumo de las ordenes en Redux + renderizado de los diferentes estados |
| `components/MisOrdenes/CardsMisOrdenes.jsx` | Se mapean las órdenes para renderizar un card por cada una              |
| `components/MisOrdenes/CardMisOrdenes.jsx`  | Se agrega el renderizado de la data                                     |
| `pages/Resumen/Resumen.jsx`                 | Ruta dinámica para renderizar el detalle de una orden                   |
| `components/Resumen/CardResumen.jsx`        | Renderizado de un card por cada ítem de la orden                        |
