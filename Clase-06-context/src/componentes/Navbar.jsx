import { useContext } from "react"
import ThemeContext from "../context"

function Navbar() {

 const {tema, handleCambioTema} = useContext(ThemeContext)

  return (
    <div>
        <p>home</p>
        <button onClick={handleCambioTema} style={{background:tema.background, color:tema.font}}>Cambiar tema</button>
    </div>
  )
}

export default Navbar