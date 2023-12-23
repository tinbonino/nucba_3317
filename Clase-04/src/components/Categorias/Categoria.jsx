import { BorderDecoration, CardCategoria } from "./CategoriasStyles"

function Categoria({img,title,category}) {
  return (
    <CardCategoria>
      <img src={img} alt={category} />
      <h2>{title}</h2>
      <BorderDecoration/>
    </CardCategoria>
  )
}

export default Categoria