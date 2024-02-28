import React from 'react'

import { useFormik } from 'formik';



function Ejemplo() {
    const formik = useFormik({
        
        initialValues: {
            name: "",
            email:""
        },

        onSubmit: (values)=>{
            console.log("Valores enviados",values)
        }

    })
  return (
    <form onSubmit={formik.handleSubmit}>
        <input
            type="text"
            placeholder="nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name} // sin getFieldProps
            /> 
       
        <input
            type="email"
            placeholder="Ingrese su email"
            {...formik.getFieldProps("email")}  //con getFieldProps
        />
        <button type="submit">
           Enviar
        </button>
        
    </form>
  )
}



export default Ejemplo