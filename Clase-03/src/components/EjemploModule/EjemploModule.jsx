import {container,parrafo} from "./EjemploModule.module.css"

// Desestructuramos el objeto de los estilos


function EjemploModule() {
  return (
    <div className={container}>
        <p className={parrafo}>
            Primer ejemplo de module
        </p>
    </div>
  )
}

export default EjemploModule