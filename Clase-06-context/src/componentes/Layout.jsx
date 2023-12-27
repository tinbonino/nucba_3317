import ThemeContext from "../context"
import { useContext } from "react"



function Layout({children}) {

    const {tema} =useContext(ThemeContext);

  return (
    <div style={{background:tema.background, color:tema.font}} >
        {children}
    </div>
  )
}

export default Layout