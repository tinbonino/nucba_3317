import "../styles.css" 

function Producto({nombre,precio}) {
  return (
    <div className="card">
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
    </div>
  )
}

export default Producto