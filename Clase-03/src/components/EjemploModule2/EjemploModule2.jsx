import estilos from "./EjemploModule2.module.css"

// Desestructuramos el objeto de los estilos


function EjemploModule2() {
  return (
    <div className={estilos.container}>
        <p className={estilos.parrafo}>
            Segundo ejemplo de module
        </p>
    </div>
  )
}

export default EjemploModule2